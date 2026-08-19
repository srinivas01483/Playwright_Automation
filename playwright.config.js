// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {

actionTimeout: 10*1000, //to set the action timeout for actions like click, fill, etc. to 10 seconds global level
navigateTimeout: 30*1000,

  

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  
    browserName: 'chromium',
    headless: false,
  },
});