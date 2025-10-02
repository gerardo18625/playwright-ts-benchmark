import { test, expect } from '@playwright/test';


for (let i = 0; i < 200; i++) {

  test(`test${i}`, async ({ page }) => {

    // Navigate to the herokuapp
    await page.goto('https://the-internet.herokuapp.com/');

    // Add and remove elements
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    await page.getByRole('button', { name: 'Add Element' }).click();
    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();
    await page.goBack();

    // Dynamic controls
    await page.getByRole('link', { name: 'Dynamic Controls' }).click();
    await page.getByRole('button', { name: 'Remove' }).click();
    await expect(page.locator('#message')).toContainText('It\'s gone!');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.locator('#checkbox').check();
    await page.getByRole('button', { name: 'Enable' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('Playwright');
    await page.getByRole('textbox').press('Enter');
    await page.goto('https://the-internet.herokuapp.com/');

    // Dynamic loading
    await page.getByRole('link', { name: 'Dynamic Loading' }).click();
    await page.getByRole('link', { name: 'Example 1: Element on page' }).click();
    await page.getByRole('button', { name: 'Start' }).click();
    await expect(page.locator('#finish')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('#finish')).toContainText('Hello World!');
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
    await page.getByRole('link', { name: 'Example 2: Element rendered' }).click();
    await page.getByRole('button', { name: 'Start' }).click();
    await page.goto('https://the-internet.herokuapp.com/');

    // Entry Add
    await page.getByRole('link', { name: 'Entry Ad' }).click();
    await expect(page.locator('div').filter({ hasText: 'This is a modal window' }).nth(4)).toBeVisible();
    await page.getByText('Close', { exact: true }).click();
    await page.goto('https://the-internet.herokuapp.com/');

    // jQuery menu
    await page.getByRole('link', { name: 'JQuery UI Menus' }).click();
    await page.getByRole('link', { name: 'Enabled' }).click();
    await page.getByRole('link', { name: 'Downloads' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'CSV' }).click();
    const download = await downloadPromise;
    await page.goto('https://the-internet.herokuapp.com/');

    // Multiple windows
    await page.getByRole('link', { name: 'Multiple Windows' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const page1 = await page1Promise;
    await expect(page1.getByRole('heading', { name: 'New Window' })).toBeVisible();
    await expect(page1.getByRole('heading')).toContainText('New Window');
    await page1.close();
    await page.goto('https://the-internet.herokuapp.com/');

    // Context menu
    await page.getByRole('link', { name: 'Context Menu' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => { });
    });
    await page.locator('#hot-spot').click({
      button: 'right'
    });

    // Select
    await page.goto('https://www.qaplayground.com/practice/select');
    await page.getByRole('combobox').filter({ hasText: 'Select Fruit' }).click();
    await page.getByRole('option', { name: 'Banana' }).click();
    await page.getByRole('listbox').selectOption('ant-man');
    await page.getByRole('listbox').selectOption('aquaman');
    await page.getByRole('combobox').filter({ hasText: 'JavaScript' }).click();
    await page.getByRole('option', { name: 'Java', exact: true }).click();
    await page.getByRole('combobox').filter({ hasText: 'Argentina' }).click();
    await page.getByRole('option', { name: 'UK' }).click();

    // Datepicker
    await page.goto('https://www.qaplayground.com/practice/calendar');
    await page.locator('div').filter({ hasText: /^Enter todays date:$/ }).getByRole('textbox').fill('2020-01-01');
    await page.locator('div').filter({ hasText: /^Enter your Birthday:$/ }).getByRole('textbox').fill('2026-01-01');

  });
}
