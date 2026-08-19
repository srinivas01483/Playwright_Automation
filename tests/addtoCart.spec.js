const{test,expect}= require('@playwright/test');


/*
test('add to cart', async ({browser}) => {
    
   

  const context = await browser.newContext();
    const page = await context.newPage();
    const Email = "srinivas01483@gmail.com";
    const productName = 'ZARA COAT 3';

    const products = page.locator(".card-body");

    const userEmail = page.locator("#userEmail");
    const userPassword = page.locator("#userPassword");
    const loginButton = page.locator("#login");

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
//login to the application

    await userEmail.fill("srinivas01483@gmail.com")
    await userPassword.fill("Srinivas@123");
    await loginButton.click();

    //to wait for the products to be visible on the page
    await page.locator(".card-body b").first().waitFor();//to wait for the first product title to be visible

    const titles = await page.locator(".card-body b").allTextContents();//to get all the product titles and store them in an array
    console.log(titles);

     const count = await products.count(); //to get the count of products displayed on the page

    for(let i=0; i<count; ++i)
    {
        if(await products.nth(i).locator("b").textContent() === productName)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }

        
    }
//to click on the cart button and verify that the product is added to the cart
    
await page.locator("[routerlink*='cart']").click();//to click on the cart button
await page.locator("div li").first().waitFor();//to wait for the first product in the cart to be visible

const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();//to check if the product is visible in the cart

expect(bool).toBeTruthy();  

await page.locator("text=Checkout").click(); //to click on the checkout button

await page.locator("[placeholder*='Select Country']").pressSequentially("ind",{delay:100});
const dropdown = page.locator(".ta-results");//to locate the dropdown element
await dropdown.waitFor();//to wait for the dropdown to be visible


const optionsCount = await page.locator(".ta-results button").count();//to get the count of options in the dropdown

for(let i=0; i<optionsCount; ++i)
{
    const text = await page.locator(".ta-results button").nth(i).textContent();//to get the text of each option in the dropdown

    if(text.trim() === "India")
    {
        await page.locator(".ta-results button").nth(i).click();//to click on the option that matches "India"
        break;
    }   

}
expect(page.locator(".user__name label")).toHaveText(Email);    //to verify that the email displayed on the checkout page matches the expected email
await page.locator(".action__submit").click();//to click on the submit button to place the order

//order confirmation page

await page.locator(".hero-primary").waitFor();//to wait for the order confirmation message to be visible
expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");  

const orderID = await page.locator("label[class='ng-star-inserted']").textContent(); //to get the order ID
    console.log(orderID);

    await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor(); // wait for the table body to be visible

await page.locator("tr").first().waitFor(); // wait for the first row to be visible
const rows = await page.locator("tbody tr").first();// get the first row of the table

for(let i=0; i<await rows.count(); ++i)
{
  //  const rowOrderID = await rows.nth(i).locator("th").textContent();   
    const rowOrderID = await rows.nth(i).locator("th").textContent();
    if(orderID.includes(rowOrderID))
    {
        await rows.nth(i).locator("button").first().click(); // click on the first button in the matching row
        break;  
    }
}
const orderIDText = await page.locator(".col-text").textContent();

expect(orderID.includes(orderIDText)).toBeTruthy();

//await page.pause();

});

*/
// some of the code is commented out because it is not needed for the test to run, but it can be used for debugging purposes.

test('order history', async ({page}) => {
    //const context = await browser.newContext();
    //const page = await context.newPage();

    const productName = 'iphone 13 pro';
    const products = page.locator(".card-body");
    const Email = page.locator("#userEmail");
    const Password = page.locator("#userPassword");
    const loginButton = page.locator("#login");

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await Email.fill("srinivas01483@gmail.com");
    await Password.fill("Srinivas@123");
    await loginButton.click();

    await page.locator(".card-body b").first().waitFor(); // wait for the first product title to be visible

    const productTitle = await page.locator(".card-body b").allTextContents(); // wait for the first product title to be visible

    console.log(productTitle);

    await products.first().waitFor(); // wait for the first product to be visible

    for(let i=0; i<await products.count();++i)
    {
if(await products.nth(i).locator(b).textContent() === productName)
{
    await products.nth(i).locator("text= Add To Cart").click();//to click on the "Add To Cart" button for the matching product
       break;
}

}

await page.locator("[routerlink*='cart']").click(); // click on the cart button
await page.locator("div li").first().waitFor(); // wait for the first product in the cart to be visible
await page.locator("text=Checkout").click(); // click on the checkout button

await page.locator("[placeholder*='Select Country']").pressSequentially("ind",{delay:100});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor(); // wait for the dropdown to be visible



});

