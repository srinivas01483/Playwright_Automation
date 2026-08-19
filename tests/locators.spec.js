const {test,expect} = require ('@playwright/test');

test('first test', async ({page})=>{


await page.goto("https://rahulshettyacademy.com/angularpractice/");

test.setTimeout(60000); //to set the timeout for the test to 60 seconds

const slowexpect = expect.configure({timeout: 9000});
page.setDefaultTimeout(9000); //to set the default timeout for the page to 9 seconds for actions like click, fill, etc.

await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Gender").selectOption("Female");
await page.getByLabel("Employed").check();
await page.waitForTimeout(2000);

await page.getByPlaceholder("Password").fill("Srinivas@123");
await page.getByRole("button", {name: "Submit"}).click();

//await page.locator(".alert-success").isVisible();
//await page.getByText("Success! The Form has been submitted successfully!").isVisible({timeout: 10000});//await expect(page.getByText("Success! The Form has been submitted successfully!")).toBeVisible({timeout: 10000});

await slowexpect(page.getByText("Success! The Form has been submitted successfully!").isVisible());
await page.getByRole("link", {name: "Shop"}).click();


await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click({timeout: 15000});//step level action to click  //wait for 15sec on the add to cart button for the product "Nokia Edge" with a timeout of 5 seconds


await slowexpect(page.locator(".my-4").first()).toHaveText("Shop Name");


});

