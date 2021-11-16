const pageObject = require('../../../page_objects/pages.js').container.PageObject;
const diploma = pageObject.getDiploma()
const dataJSON = require('../../data/dataJSON.json')
const faker = require('faker')

describe('Spec for diploma project', () => {

    let link = 'http://automationpractice.com/index.php'

    let info = {
        fakerNameFirstName: faker.name.firstName(),
        fakerNameLastName: faker.name.lastName(),
        password: Math.floor(Math.random() * 100000000),
        email: 'autotest' + Math.floor(Math.random() * 100000000) + '@test.com',
        street: faker.address.streetName(),
        city: faker.address.city(),
        zip: '00000',
        phone: Math.floor(Math.random() * 10000000000000),
        company: faker.company.companyName()
    }

    beforeEach(() => {
        browser.url(link)
    })

    it('Validation', function () {

        // Login
        diploma.clickLoginBtn()

        // To Sign In form
        diploma.fillCreateEmailField(info.email)
        diploma.clickCreateBtn()

        // Trigger alerts
        diploma.clickSubmitBtn()

        // Check alerts

        diploma.checkAlerts(dataJSON)

    })

    it('Create account and verify data', function () {

        // Login
        diploma.clickLoginBtn()

        // To Sign In form
        diploma.fillCreateEmailField(info.email)
        diploma.clickCreateBtn()

        // Sign In new user
        diploma.fillSignInForm(dataJSON, info)
        diploma.clickSubmitBtn()
        diploma.waitForSuccessSubmit()

        // Logout
        diploma.clickLogoutBtn()

        // Login to check that user was created
        diploma.fillCreateField(dataJSON.fields.personalInfo.email, info.email)
        diploma.fillCreateField(dataJSON.fields.personalInfo.password, info.password)
        diploma.clickSignInBtn()

        // Check that user data is valid
        diploma.clickInfoLink()
        diploma.checkPersonalInfoForm(dataJSON, info)

        browser.back()

        diploma.clickAddressLink()
        diploma.checkAddressInfoForm(info)

    })

});
