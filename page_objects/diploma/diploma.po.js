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

    createFields (field) {
        return $('[id="' + field + '"]')
    }

    dropdownOption (dropdown, day) {
        return $('#' + dropdown + ' option[value="' + day + '"]')
    }

    submitBtn () {
        return $('#submitAccount')
    }

    successMessage () {
        return $('//*[contains(text(),"Welcome to your account.")]')
    }

    logoutBtn () {
        return $('.logout')
    }

    signInBtn() {
        return $('#SubmitLogin')
    }

    infoLink() {
        return $('[title="Information"]')
    }

    /**
     * Functions
     */

    //clicks

    clickLoginBtn () {
        commonHelper.waitAndClick(this.loginBtn)
    }

    clickCreateBtn () {
        commonHelper.waitAndClick(this.createBtn)
    }

    clickGenderRadioBtn (gender) {
        commonHelper.waitAndClick(this.genderRadioBtn(gender))
    }

    selectDropOption (field, option) {
        this.createFields(field).selectByAttribute('value', option)
    }

    clickDropdown(field) {
        commonHelper.waitAndClick(this.createFields(field))
    }

    clickDropdownOption(field, option){
        commonHelper.waitAndClick(this.dropdownOption(field, option))
    }

    clickSubmitBtn() {
        commonHelper.waitAndClick(this.submitBtn())
    }

    clickLogoutBtn() {
        commonHelper.waitAndClick(this.logoutBtn())
    }

    clickSignInBtn() {
        commonHelper.waitAndClick(this.signInBtn())
    }

    clickInfoLink() {
        commonHelper.waitAndClick(this.infoLink())
    }

    //fills

    fillCreateEmailField (text) {
        commonHelper.waitAndSendKeys(this.createEmailField, text)
    }

    fillCreateField (field, text) {
        commonHelper.waitAndSendKeys(this.createFields(field), text)
    }

    //waits

    waitForSuccessSubmit () {
        this.successMessage().waitForDisplayed()
    }

    //cheks

    checkPersonalInfoForm (field, value) {
        expect (this.createFields(field.clientFirstName)).toHaveValue(value)
        // expect (this.createFields(field.clientLastName)).toHaveValue(value)
        // expect (this.createFields(field.email)).toHaveValue(value)
        // expect (this.createFields(field.password)).toHaveValue(value)

    }






}

module.exports = DiplomaPo;