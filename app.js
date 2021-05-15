import puppeteer from "puppeteer";

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.gmbinder.com/share/-M1kp63806k2QswdeySI');
  await page.pdf({ path: 'spelljammers_logbook.pdf', format: 'a4' });
  await browser.close();
})();
