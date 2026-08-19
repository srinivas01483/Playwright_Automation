const {test,expect} = require ('@playwright/test');
const { text } = require('node:stream/consumers');

test('child window handle',async({browser})=>{
    const context = await browser.newContext();
    const page =  await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentsLink = await page.locator("[href*='documents-request']");

   const [newPage] = await Promise.all([

    context.waitForEvent('page'),
    documentsLink.click(),])

     const text = await newPage.locator(".red").textContent();

     const arrayText = text.split("@");
    
     const domain = arrayText[1].split(" ")[0];
     await page.locator("#username").fill(domain);
     console.log(await page.locator("#username").inputValue());
     console.log(text);

});