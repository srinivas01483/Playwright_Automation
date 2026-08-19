const {test,expect} = require ('@playwright/test');

test('first test', async ({browser})=>{

const browserContext = await browser.newContext();
 const page = await browserContext.newPage();
 await page.goto("https://google.com/");
console.log(await page.title());
await expect(page).toHaveTitle("Google");

});


test('second test', async ({page})=>{

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title());
 await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

});



test('login page with incorrect credentials', async ({browser})=>{

const browserContext = await browser.newContext();
const page = await browserContext.newPage();


await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("input#password").fill("learning");
await page.locator("[name='signin']").click();

console.log(await page.locator("[style*='block']").textContent());

await expect(page.locator("[style*='block']")).toContainText("Old password");

});

test.only('login page with correct credentials', async ({browser})=>{  

   const browserContext = await browser.newContext();
   const page = await browserContext.newPage();
const userName = page.locator('#username');
const password = page.locator('#password');
const signIn = page.locator("[name='signin']");
const cardTitles = page.locator(".card-body a");

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   await userName.fill("rahulshettyacademy");
await password.fill("Learning");
await signIn.click();
console.log(await page.title());

await userName.fill("");
await userName.fill("rahulshettyacademy");
await password.fill("Learning@830$3mK2");
await signIn.click();


console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());

const alltitles = await cardTitles.allTextContents();
console.log(alltitles);

//await cardTitles.first().click();
//await cardTitles.nth(1).click;
//console.log(await cardTitles.allTextContents().then(values => console.log(values)));




});