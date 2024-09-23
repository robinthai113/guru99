import { expect, test } from "@playwright/test";
import LoginPage from "../pages/login.page";
import BasePage from "../pages/base.page";
import NewCustomerPage from "../pages/newcustomer.page";


test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
});

test('Login Successfull!', async ({page}) => {
  const loginPage = new LoginPage(page);
  const basePage = new BasePage(page);  
  await loginPage.loginToApplication();
  await basePage.verifyManagerIdMatchWithUserId();
});

test('Verify the validation messages work', async ({page})=> {
  const loginPage = new LoginPage(page);
  await loginPage.leaveUserIdEmpty();
  await loginPage.verifyValidationMessageOfUserId('User-ID must not be blank'); 
  await loginPage.leavePasswordEmpty();
  await loginPage.verifyValidationMessageOfPassword('Password must not be blank');
});

test('Verify user cannot Login if he leaves all field empty', async ({page})=> {
  const loginPage = new LoginPage(page);
  await loginPage.leaveUserIdEmpty();
  await loginPage.verifyValidationMessageOfUserId('User-ID must not be blank'); 
  await loginPage.leavePasswordEmpty();
  await loginPage.verifyValidationMessageOfPassword('Password must not be blank');
});

test('Verify user can add new customer', async ({page})=> {
  const newCustomerPage = new NewCustomerPage(page);
  await newCustomerPage.addNewUser();
});

