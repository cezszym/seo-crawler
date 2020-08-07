
import Validator from './Validator.js';
import Spider from './Spider.js';


const links = [
  "https://skupszop.pl/koszyk",
  "https://skupszop.pl",
  "https://skupszop.pl/wyprzedaz",
  "https://skupszop.pl/pomoc",
  "https://skupszop.pl/ksiazki/literatura-obyczajowa/literatura-obyczajowa-145953"
];

async function CheckSeo (url) {
  const spider = new Spider();
  await spider.launch();

  const dom = await spider.visit(url);
  const validator = new Validator(dom, url);
  validator.validate();

  await spider.close();
};


links.forEach(link => CheckSeo(link));
