import { test, expect } from '@playwright/test';

for(let i=0; i<100; i++){
  test(`test_${i}`, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="about-sidebar-link"]').click();
  await page.goBack();
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
  await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Test');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('User');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('90210');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await page.goto('https://bstackdemo.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#username svg').click();
  await page.getByText('demouser', { exact: true }).click();
  await page.locator('#password svg').click();
  await page.getByText('testingisfun99', { exact: true }).click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('[id="1"]').getByText('Add to cart').click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByText('X', { exact: true }).click();
  await page.locator('[id="2"]').getByText('Add to cart').click();
  await page.locator('.shelf-item__del').nth(1).click();
  await page.getByText('X', { exact: true }).click();
  await page.locator('[id="3"]').getByRole('button', { name: 'delete' }).click();
  await page.locator('span').filter({ hasText: /^3$/ }).first().click();
  await page.getByText('Checkout').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('User');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('Test address');
  await page.getByRole('textbox', { name: 'State/Province' }).click();
  await page.getByRole('textbox', { name: 'State/Province' }).fill('test');
  await page.getByRole('textbox', { name: 'Postal Code' }).click();
  await page.getByRole('textbox', { name: 'Postal Code' }).fill('90210');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Continue Shopping »' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  
});
}