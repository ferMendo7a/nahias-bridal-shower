const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const outputDir = __dirname;
const scenarios = [
  {
    name: '01-before-24h',
    now: '2026-12-04T00:00:00Z',
    expected: { titleHidden: true, complete: false }
  },
  {
    name: '02-within-24h',
    now: '2026-12-06T10:00:00-03:00',
    expected: { titleHidden: false, complete: false }
  },
  {
    name: '03-event-started',
    now: '2026-12-07T00:00:00Z',
    expected: { titleHidden: true, complete: true }
  }
];

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const scenario of scenarios) {
    const scenarioDir = path.join(outputDir, scenario.name);
    fs.mkdirSync(scenarioDir, { recursive: true });
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      recordVideo: { dir: scenarioDir, size: { width: 390, height: 844 } }
    });

    const fixedNow = Date.parse(scenario.now);
    await context.addInitScript((timestamp) => {
      const RealDate = Date;
      class FixedDate extends RealDate {
        constructor(...args) {
          super(...(args.length ? args : [timestamp]));
        }
        static now() {
          return timestamp;
        }
      }
      window.Date = FixedDate;
    }, fixedNow);

    const page = await context.newPage();
    await page.goto('http://127.0.0.1:5506', { waitUntil: 'networkidle' });
    await page.waitForTimeout(scenario.name === '03-event-started' ? 1500 : 2200);

    await page.screenshot({
      path: path.join(outputDir, `${scenario.name}.png`),
      fullPage: true
    });

    const state = await page.evaluate(() => ({
      titleHidden: document.querySelector('#countdown-title').hidden,
      titleText: document.querySelector('#countdown-title').textContent.trim(),
      complete: document.querySelector('.countdown').classList.contains('countdown--complete'),
      values: [...document.querySelectorAll('.countdown__unit strong')].map((element) => element.textContent),
      status: document.querySelector('#countdown-status').textContent.trim(),
      confettiPieces: document.querySelectorAll('#countdown-confetti span').length,
      detailLabels: [...document.querySelectorAll('.detail-card__label')].map((element) => element.textContent.trim()),
      detailValues: [...document.querySelectorAll('.detail-card__value')].map((element) => element.textContent.trim()),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));

    const expectedMatches =
      state.titleHidden === scenario.expected.titleHidden &&
      state.complete === scenario.expected.complete;

    results.push({ scenario: scenario.name, simulatedNow: scenario.now, expectedMatches, state });
    await context.close();

    const generatedVideo = fs.readdirSync(scenarioDir).find((file) => file.endsWith('.webm'));
    if (generatedVideo) {
      fs.renameSync(path.join(scenarioDir, generatedVideo), path.join(outputDir, `${scenario.name}.webm`));
    }
  }

  await browser.close();
  fs.writeFileSync(path.join(outputDir, 'results.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
