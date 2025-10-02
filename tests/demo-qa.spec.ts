import test, { expect } from "@playwright/test";

for (let i = 0; i < 5; i++) {

    test(`demoqa${i}`, async ({ page }) => {

        //Navigate to the demo QA site
        await page.goto('https://demoqa.com/automation-practice-form');

        //Fill the text input fields
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill('User');
        await page.getByRole('textbox', { name: 'name@example.com' }).click();
        await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@test.com');

        //Select the gender
        await page.getByText('Male', { exact: true }).click();

        ///Fill the mobile number
        await page.getByRole('textbox', { name: 'Mobile Number' }).click();
        await page.getByRole('textbox', { name: 'Mobile Number' }).fill('3325443356');

        // await page.locator('#dateOfBirthInput').click();
        // await page.getByRole('combobox').nth(1).selectOption('2010');
        // await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0');
        // await page.getByRole('option', { name: 'Choose Friday, January 1st,' }).click();

        //Fill the auto-complete input
        await page.locator('.subjects-auto-complete__value-container').click();
        await page.locator('#subjectsInput').fill('ma');
        await page.getByText('Maths', { exact: true }).click();

        //Check all the checkboxes
        await page.getByText('Sports').click();
        await page.getByText('Reading').click();
        await page.getByText('Music').click();

        // Set the file to upload
        //await page.getByRole('button', { name: 'Select picture' }).setInputFiles('/Users/gerardohernandez/workspace/POC_PLAYWRIGHT/PLAYWRIGHT_FOR_CI_TYPESCRIPT/reportPortal.jpg');

        // Fill the address
        await page.getByRole('textbox', { name: 'Current Address' }).click();
        await page.getByRole('textbox', { name: 'Current Address' }).fill('Test Address');

        // Select the state
        await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
        await page.getByText('NCR', { exact: true }).click();
        await page.getByText('Select City').click();
        await page.getByText('Gurgaon', { exact: true }).click();

        //Submit the form
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('#example-modal-sizes-title-lg')).toContainText('Thanks for submitting the form');
        await page.getByRole('dialog', { name: 'Thanks for submitting the form' }).press('Escape');

        //CLick on Alters frames and windows
        await page.getByText('Alerts, Frame & Windows').click();
        await page.getByText('Browser Windows').click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'New Tab' }).click();
        const page1 = await page1Promise;
        await page1.goto('https://www.google.com/?zx=1759365364108&no_sw_cr=1');
        //await expect(page1.locator('#SIvCob')).toContainText('Google disponible en: English');
        await page1.close();
        const page2Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'New Window', exact: true }).click();
        const page2 = await page2Promise;
        await expect(page2.locator('#sampleHeading')).toContainText('This is a sample page');
        await page2.close();
        const page3Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'New Window Message' }).click();
        const page3 = await page3Promise;
        await expect(page3.locator('body')).toContainText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
        await page3.close();

        //Click in modal and dialogs
        await page.getByText('Modal Dialogs').click();
        await page.getByRole('button', { name: 'Small modal' }).click();
        await expect(page.locator('#example-modal-sizes-title-sm')).toContainText('Small Modal');
        await page.locator('#closeSmallModal').click();
        await page.getByRole('button', { name: 'Large modal' }).click();
        await expect(page.locator('#example-modal-sizes-title-lg')).toContainText('Large Modal');
        await page.locator('#closeLargeModal').click();
        await page.getByText('Widgets').click();
        await page.getByText('Slider').click();
        await page.getByRole('slider').fill('78');
    });
}


