const commonHelper = require('../../helpers/common.helper.js');

class DiplomaPo {
    /**
     * Define Elements
     */

    get loginBtn() {
        return $('.login')
    }

    get createBtn() {
        return $('#SubmitCreate')
    }

    get createEmailField() {
        return $('#email_create')
    }

    genderRadioBtn(gender) {
        if (gender.includes('male')) {
            gender = '1'
        } else {
            gender = '2'
        }
        return $('[for="id_gender' + gender + '"]')
    }

    createFields(field) {
        return $('[id="' + field + '"]')
    }

    dropdownOption(dropdown, day) {
        return $('#' + dropdown + ' option[value="' + day + '"]')
    }

    get submitBtn() {
        return $('#submitAccount')
    }

    get successMessage() {
        return $('//*[contains(text(),"Welcome to your account.")]')
    }

    get logoutBtn() {
        return $('.logout')
    }

    get signInBtn() {
        return $('#SubmitLogin')
    }

    get infoLink() {
        return $('[title="Information"]')
    }

    get addressLink() {
        return $('[title="Addresses"]')
    }

    addressInfo(text) {
        return $('//li//span[contains(text(),"' + text + '")]')
    }

    get alertMessages() {
        return $$('//*[contains(@class,"alert")]//li')
    }

    /**
     * Functions
     */

    //clicks

    clickLoginBtn() {
        commonHelper.waitAndClick(this.loginBtn)
    }

    clickCreateBtn() {
        commonHelper.waitAndClick(this.createBtn)
    }

    clickGenderRadioBtn(gender) {
        commonHelper.waitAndClick(this.genderRadioBtn(gender))
    }

    selectDropOption(field, option) {
        browser.pause(50)
        this.createFields(field).selectByAttribute('value', option)
    }

    clickLogoutBtn() {
        commonHelper.waitAndClick(this.logoutBtn)
    }

    clickSignInBtn() {
        commonHelper.waitAndClick(this.signInBtn)
    }

    clickSubmitBtn() {
        commonHelper.waitAndClick(this.submitBtn)
    }

    clickInfoLink() {
        commonHelper.waitAndClick(this.infoLink)
    }

    clickAddressLink() {
        commonHelper.waitAndClick(this.addressLink)
    }

    //fills

    fillCreateEmailField(text) {
        commonHelper.waitAndSendKeys(this.createEmailField, text)
    }

    fillCreateField(field, text) {
        commonHelper.waitAndSendKeys(this.createFields(field), text)
    }

    //waits

    waitForSuccessSubmit() {
        this.successMessage.waitForDisplayed()
    }

    //cheks

    checkPersonalInfoForm(field, value) {
        expect(this.createFields(field.fields.addressInfo.firstName)).toHaveValue(value.fakerNameFirstName)
        expect(this.createFields(field.fields.addressInfo.lastName)).toHaveValue(value.fakerNameLastName)
        expect(this.createFields(field.fields.personalInfo.email)).toHaveValue(value.email)
    }

    checkAddressInfoForm(value) {
        this.addressInfo(value.fakerNameFirstName).waitForDisplayed()
        this.addressInfo(value.fakerNameLastName).waitForDisplayed()
        this.addressInfo(value.street).waitForDisplayed()
        this.addressInfo(value.city).waitForDisplayed()
        this.addressInfo(value.zip).waitForDisplayed()
        this.addressInfo(value.phone).waitForDisplayed()
        this.addressInfo(value.company).waitForDisplayed()
    }

    checkAlerts(info) {
        expect
        (this.alertMessages[0]).toHaveText(info.validationMessages.phone_alert)
        expect
        (this.alertMessages[1]).toHaveText(info.validationMessages.lastname_alert)
        expect
        (this.alertMessages[2]).toHaveText(info.validationMessages.firstname_alert)
        expect
        (this.alertMessages[3]).toHaveText(info.validationMessages.password_alert)
        expect
        (this.alertMessages[4]).toHaveText(info.validationMessages.address_alert)
        expect
        (this.alertMessages[5]).toHaveText(info.validationMessages.city_alert)
        expect
        (this.alertMessages[6]).toHaveText(info.validationMessages.zip_alert)
        expect
        (this.alertMessages[7]).toHaveText(info.validationMessages.state_alert)
    }

    // function claster

    fillSignInForm(id, value) {

        this.clickGenderRadioBtn('male')

        this.fillCreateField(id.fields.personalInfo.clientFirstName, value.fakerNameFirstName)
        this.fillCreateField(id.fields.personalInfo.clientLastName, value.fakerNameLastName)
        this.fillCreateField(id.fields.personalInfo.email, value.email)
        this.fillCreateField(id.fields.personalInfo.password, value.password)
        this.selectDropOption(id.fields.personalInfo.dates.day, id.fields.personalInfo.dates.options.dayOption)
        this.selectDropOption(id.fields.personalInfo.dates.month, id.fields.personalInfo.dates.options.monthOption)
        this.selectDropOption(id.fields.personalInfo.dates.year, id.fields.personalInfo.dates.options.yearOption)

        this.fillCreateField(id.fields.addressInfo.firstName, value.fakerNameFirstName)
        this.fillCreateField(id.fields.addressInfo.lastName, value.fakerNameLastName)
        this.fillCreateField(id.fields.addressInfo.company, value.company)
        this.fillCreateField(id.fields.addressInfo.address, value.street)
        this.fillCreateField(id.fields.addressInfo.addressDetail, value.street)
        this.fillCreateField(id.fields.addressInfo.city, value.city)
        this.selectDropOption(id.fields.addressInfo.state, id.fields.personalInfo.dates.options.dayOption)

        this.fillCreateField(id.fields.addressInfo.zip, value.zip)
        this.fillCreateField(id.fields.addressInfo.additionalInfo, value.phone)
        this.fillCreateField(id.fields.addressInfo.phone, value.phone)
        this.fillCreateField(id.fields.addressInfo.homePhone, value.phone)
        this.fillCreateField(id.fields.addressInfo.assign, value.street)
    }


}

module.exports = DiplomaPo;