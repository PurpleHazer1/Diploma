const pageObject = require('../../../page_objects/pages.js').container.PageObject;
const diploma = pageObject.getDiploma()
const info = require('../../data/info.json')
const faker = require('faker')


describe('Spec for diploma project', () => {

    let link = 'http://automationpractice.com/index.php',
        fakerName = faker.name.firstName() + " " + faker.name.lastName(),
        password = Math.floor(Math.random() * 100000000),
        email = 'autotest' + Math.floor(Math.random() * 100000000) + '@test.com',
        street = faker.address.streetName(),
        city = faker.address.city(),
        zip = '00000',
        phone = Math.floor(Math.random() * 10000000000000),
        company = faker.company.companyName();

    it('test', function () {
        browser.url(link);
        diploma.clickLoginBtn()

        diploma.fillCreateEmailField(email)

        diploma.clickCreateBtn()

        diploma.clickGenderRadioBtn('female')

        diploma.fillCreateField(info.fields.personalInfo.clientFirstName, fakerName.split(" ")[0])
        diploma.fillCreateField(info.fields.personalInfo.clientLastName, fakerName.split(" ")[1])
        diploma.fillCreateField(info.fields.personalInfo.email, email)
        diploma.fillCreateField(info.fields.personalInfo.password, password)
        diploma.selectDropOption(info.fields.personalInfo.dates.day, info.fields.personalInfo.dates.options.dayOption)
        diploma.selectDropOption(info.fields.personalInfo.dates.month, info.fields.personalInfo.dates.options.monthOption)
        diploma.selectDropOption(info.fields.personalInfo.dates.year, info.fields.personalInfo.dates.options.yearOption)

        diploma.fillCreateField(info.fields.addressInfo.firstName, fakerName.split(" ")[0])
        diploma.fillCreateField(info.fields.addressInfo.lastName, fakerName.split(" ")[1])
        diploma.fillCreateField(info.fields.addressInfo.company, company)
        diploma.fillCreateField(info.fields.addressInfo.address, street)
        diploma.fillCreateField(info.fields.addressInfo.addressDetail, street)
        diploma.fillCreateField(info.fields.addressInfo.city, city)
        diploma.selectDropOption(info.fields.addressInfo.state, info.fields.personalInfo.dates.options.dayOption)

        diploma.fillCreateField(info.fields.addressInfo.zip, zip)
        diploma.fillCreateField(info.fields.addressInfo.additionalInfo, phone)
        diploma.fillCreateField(info.fields.addressInfo.phone, phone)
        diploma.fillCreateField(info.fields.addressInfo.homePhone, phone)
        diploma.fillCreateField(info.fields.addressInfo.assign, street)
        diploma.clickSubmitBtn()
        diploma.waitForSuccessSubmit()
        diploma.clickLogoutBtn()
        diploma.fillCreateField(info.fields.personalInfo.email, email)
        diploma.fillCreateField(info.fields.personalInfo.password, password)
        diploma.clickSignInBtn()
        diploma.clickInfoLink()
        diploma.checkPersonalInfoForm(info.fields.personalInfo, fakerName.split(" ")[0])
        // browser.pause(10000000)

    })



});
