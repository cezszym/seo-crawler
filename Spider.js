import puppeteer from 'puppeteer';
import jsdom from 'jsdom';



const { JSDOM } = jsdom;

export default class Spider {
  browser = null;

  async launch() {
    this.browser = await puppeteer.launch({headless: true,
      args: [
      '--incognito',
    ]});
  }

  async visit(url) {    
    const page = await this.browser.newPage();
    await page.goto(url);
    const content = await page.content();  
    return new JSDOM(content);
  }

  async close() {
    await this.browser.close();
  }
}