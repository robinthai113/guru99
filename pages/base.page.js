import { expect } from "@playwright/test";
import { config } from "../env.config";
export default class BasePage {
    constructor (page) {
        this.page = page;
        this.menuNewCustomer = page.getByText('New Customer');
        this.pageHeader = page.locator('p[class="heading3"]');
        this.menuEditCustomer = page.getByText('Edit Customer');
        this.menuDeleteCustomer = page.getByText('Delete Customer');
        this.menuNewAccount = page.getByText('New Account');
        this.menuEditAccount = page.getByText('Edit Account');
        this.menuDeleteAccount = page.getByText('Delete Account');
        this.menuDeposit = page.getByText('Deposit');
        this.managerId = page.locator('tr[class="heading3"]');
    }

    async navigateToNewCustomer() {
        await this.menuNewCustomer.click();
        await expect(this.pageHeader).toHaveText('Add New Customer');
        return this;
    }
    async navigateToEditCustomer() {
        await this.menuEditCustomer.click();
        await expect(this.pageHeader).toHaveText('Edit Customer Form');
        return this;
    } 

    async verifyManagerIdMatchWithUserId() {
        await expect(this.managerId).toContainText(config.USERID);
    }

}

//https://www.youtube.com/watch?v=ylEy4eLdhFs