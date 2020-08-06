const puppeteer = require('puppeteer');

async function makeScreen () {
    const browser = await puppeteer.launch({headless: false, slowMo: 100,
        args: [
        '--incognito',
      ]});
    const page = await browser.newPage();
    await page.authenticate({'username':'bryk', 'password': 'bryk'});
    await page.goto('https://sklep.bryk.com.pl/index.php?route=product/product&path=25_66&product_id=32');
    await page.waitFor(1500);
    await page.focus('[name="opqty[283][484]"]');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('1');
    await page.click('#button-cart');
    await page.goto('https://sklep.bryk.com.pl/index.php?route=checkout/checkout');
    await page.waitFor(700);
    await page.click('#input-email');
    await page.type('#input-email', 'test2@mail.com');
    await page.click('#input-password');
    await page.type('#input-password', '12345');
    await page.click('#button-login');
    await page.waitForNavigation({load: true});
    await page.waitFor(900);
    await page.click('input[value="Kontynuuj"]');
    await page.waitFor(900);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitFor(900);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForNavigation({load: true});
    await page.screenshot({path: 'screenshot4.png', fullPage: true});
    await browser.close();
}

makeScreen();

{/* <input type="text" name="firstname" value="" placeholder="Imię" id="input-payment-firstname" class="form-control"></input> */}

{/* <input type="radio" name="payment_address" value="new"></input> */}

{/* <input type="button" value="Kontynuuj" id="button-payment-address" data-loading-text="Ładowanie..." class="btn btn-primary ttv-innerpage-button"></input> */}


