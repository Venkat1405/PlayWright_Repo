import { test, expect } from '@playwright/test';

// test('Register new user', async ({ page }) => {
//   await page.goto('https://parabank.parasoft.com/parabank/index.htm');  
//   await expect(page).toHaveTitle(/ParaBank|Welcome/);
//   await page.getByRole('link', { name: 'Register' }).click();
//   await page.locator('[id="customer.firstName"]').fill('Test_FName_4');  
//   await page.locator('[id="customer.lastName"]').fill('Test_LName_4');
//   await page.locator('[id="customer.address.street"]').fill('Test 123 Street');
//   await page.locator('[id="customer.address.city"]').fill('San Drone');
//   await page.locator('[id="customer.address.state"]').fill('CA');
//   await page.locator('[id="customer.address.zipCode"]').fill('92126');
//   await page.locator('[id="customer.phoneNumber"]').fill('1234908781');
//   await page.locator('[id="customer.ssn"]').fill('6660001234');
//   await page.locator('[id="customer.username"]').fill('TestUser_004');
//   await page.locator('[id="customer.password"]').fill('TempPwd');
//   await page.locator('#repeatedPassword').fill('TempPwd');
//   await page.getByRole('button', { name: 'Register' }).click();
//   await expect(page.getByRole('heading', { name: 'Welcome TestUser_004' })).toBeVisible();  
// });
test('Login with existing user', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').fill('TestUser_004');
  await page.locator('input[name="password"]').fill('TempPwd');
  await page.getByRole('button', { name: 'Log In' }).click();
  const logoutLink = page.getByRole('link', { name: 'Log Out' });
  await expect(logoutLink).toBeVisible();
  if (await logoutLink.isVisible()) {
    await logoutLink.click();
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
  };
  const newAccountLink = page.getByRole('link', { name: 'Open New Account' });
  await expect(newAccountLink).toBeVisible();
  if (await newAccountLink.isVisible()) {
    await newAccountLink.click();
    await expect(page.getByRole('button', { name: 'Open New Account' })).toBeVisible();
  };
});
