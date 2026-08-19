const {test,expect} = require ('@playwright/test');

test('sign up page',async({page})=>{

//const browserContext = await browser.newContext();
//const page = await browserContext.newPage();
const firstName = page.locator("#firstName");
const lastName = page.locator("#lastName");
const userEmail = page.locator("#userEmail");
const userMobile = page.locator("#userMobile");
const userPassword = page.locator("#userPassword");
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

console.log(page.title());

await page.locator(".text-reset").click();
await firstName.fill("srinivas5");
await lastName.fill("goud");
await userEmail.fill("srinivas016@gmail.com");
await page.locator("#userMobile").fill("9000189904");
await page.locator("#userPassword").fill("Srinivas@123");
await page.locator("#confirmPassword").fill("Srinivas@123");
await page.locator("[type='checkbox']").check();//to check the checkbox
await page.locator("#login").click();
await page.locator("h1.headcolor").waitFor();//to wait for the element to be visible
await expect(page.locator("h1.headcolor")).toContainText("Account Created Successfully");

await page.locator("button[class='btn btn-primary']").click();
await page.locator("#userEmail").fill("srinivas016@gmail.com");
await page.locator("#userPassword").fill("Srinivas@123");
await page.locator("#login").click();

await page.locator(".card-body b").first().waitFor();

const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);


});


