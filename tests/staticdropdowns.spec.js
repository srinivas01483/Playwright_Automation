const {test,expect} = require ('@playwright/test');

test('dropdown',async({page})=>{ 

    

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


const documentsLink = await page.locator("[href*='documents-request']");
const dropdown = await page.locator("select.form-control").selectOption("consult");
await page.locator(".radiotextsty").nth(1).click();
await page.locator("#okayBtn").click();

await expect(page.locator(".radiotextsty").last()).toBeChecked(); //to check the last checkbox is checked or not
console.log(await page.locator(".radiotextsty").last().isChecked());//to print the value of the checkbox

await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();//to check the checkbox is checked or not
await page.locator("#terms").uncheck();//to uncheck the checkbox
 expect (await page.locator("#terms").isChecked()).toBeFalsy();//to check the checkbox is unchecked or not

await expect(documentsLink).toHaveAttribute("class","blinkingText");//to check the attribute of the link


//assertion
//await page.pause();


});