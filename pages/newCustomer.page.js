import { faker } from "@faker-js/faker";
export default class NewCustomerPage {
    constructor(page) {
        this.page = page;
        this.guru99BankHeader = page.locator('h2[class="barone"]');
        this.customerNameTextBox = page.locator('input[name="name"]');
        this.genderRadio = page.locator('input[value="m"]');
        this.genderRadioParent = genderRadio.parent();
        this.dob = page.locator('#dob');
        this.addessField = page.locator('textarea[name="addr"]');
        this.cityField = page.locator('input[name="city"]');
        this.stateField = page.locator('input[name="state"]');
        this.pinField = page.locator('input[name="pinno"]');
        this.phoneField = page.locator('input[name="telephoneno"]');
        this.emailField = page.locator('input[name="emailid"]');
        this.passwordField = page.locator('input[name="password"]');

    }

    async addNewUser() {
        const totalGenderOptions = this.genderRadioParent.count();
        const randomGender = Math.floor(Math.random() * totalGenderOptions);
        await this.customerNameTextBox.fill(faker.person.fullName());
        await this.genderRadioParent.selectOption({index: randomGender});
        await this.dob.faker.date.between({ from: '01-01-1980', to: Date.now() });
        await this.addessField.fill(faker.address.streetAddress());
        await this.cityField.fill(faker.address.city());
        await this.stateField.fill(faker.address.state());
        await this.pinField.fill(faker.address.zipCode());
        await this.phoneField.fill(faker.number.binary());
        await this.emailField.fill(faker.internet.email());
        await this.passwordField.fill(faker.internet.password());

        return this;
    }
    
}