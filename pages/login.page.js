import { expect } from "@playwright/test";
import { config } from "../env.config";
export default class LoginPage {
    constructor (page) {
        this.page = page;
        this.guru99BankHeader = page.locator('h2[class="barone"]');
        this.userIdTextBox = page.locator('input[type="text"]');
        this.passwordTextBox = page.locator('input[type="password"]');
        this.loginBtn = page.locator('input[type="submit"]');
        this.resetBtn = page.locator('input[type="reset"]');
        this.userIdValidationMessage = page.locator('#message23');
        this.passwordValidationMessage = page.locator('#message18');
        this.welcomeMessage = page.locator('marquee[class=heading3]');
    }

    async enterUserId(user) {
        await this.userIdTextBox.fill(user);
        return this;
    }
    async enterPassword(password) {
        await this.passwordTextBox.fill(password);
        return this;
    }
    async clickLoginBtn() {
        await this.loginBtn.click();
        return this;
    }
    async clickResetBtn() {
        await this.resetBtn.click();
        return this;
    }

    async goToLoginPage() {
        await this.page.goto("");
    }
     
    async loginToApplication() {
        await this.enterUserId(config.USERID);
        await this.enterPassword(config.PASSWORD);
        await this.clickLoginBtn();
        await expect(this.welcomeMessage).toBeVisible();
    }

    async leaveUserIdEmpty() {
        await this.userIdTextBox.click();
        await this.guru99BankHeader.click();
    }

    async leavePasswordEmpty() {
        await this.passwordTextBox.click();
        await this.guru99BankHeader.click();
    }

    async verifyValidationMessageOfUserId(expectedMessage) {
        await expect(this.userIdValidationMessage).toHaveText(expectedMessage);
        return this;
    }
    
    async verifyValidationMessageOfPassword(expectedMessage) {
        await expect(this.passwordValidationMessage).toHaveText(expectedMessage);
        return this;
    }
}