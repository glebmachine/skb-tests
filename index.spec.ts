
const puppeteer = require('puppeteer');
const { setup: setupDevServer, teardown: teardownDevServer } = require('jest-dev-server');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

const reqPercent = 0.03;

it('desktop visual regression test', async () => {
  await setupDevServer({
		command: `${process.cwd()}/node_modules/.bin/static site/.`,
    launchTimeout: 50000
  });
  console.log('server started');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 3993 })
	await page.goto('http://localhost:8080/', { waitUntil: 'load' });
  const screenshot = await page.screenshot();
  browser.close();
  await teardownDevServer();

  return expect(screenshot).toMatchImageSnapshot({
		failureThreshold: reqPercent,
    failureThresholdType: 'percent',
  });
});

it('big tablet visual regression test', async () => {
	await setupDevServer({
		command: `${process.cwd()}/node_modules/.bin/static site/.`,
		launchTimeout: 50000
	});
	console.log('server started');

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width: 1024, height: 4896 })
	await page.goto('http://localhost:8080/', { waitUntil: 'load' });
	const screenshot = await page.screenshot();
	browser.close();
	await teardownDevServer();

	return expect(screenshot).toMatchImageSnapshot({
		failureThreshold: reqPercent,
		failureThresholdType: 'percent',
	});
});

it('small tablet visual regression test', async () => {
	await setupDevServer({
		command: `${process.cwd()}/node_modules/.bin/static site/.`,
		launchTimeout: 50000
	});
	console.log('server started');

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width: 768, height: 5227 })
	await page.goto('http://localhost:8080/', { waitUntil: 'load' });
	const screenshot = await page.screenshot();
	browser.close();
	await teardownDevServer();

	return expect(screenshot).toMatchImageSnapshot({
		failureThreshold: reqPercent,
		failureThresholdType: 'percent',
	});
});

it('mobile visual regression test', async () => {
	await setupDevServer({
		command: `${process.cwd()}/node_modules/.bin/static site/.`,
		launchTimeout: 50000
	});
	console.log('server started');

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({ width: 320, height: 4608 })
	await page.goto('http://localhost:8080/', { waitUntil: 'load' });
	const screenshot = await page.screenshot();
	browser.close();
	await teardownDevServer();

	return expect(screenshot).toMatchImageSnapshot({
		failureThreshold: reqPercent,
		failureThresholdType: 'percent',
	});
});
