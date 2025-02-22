const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminContentLibraryPage = require("../../../support/pageObjects/LMS-2/AdminContentLibraryPage")
const myPersonalLibraryPage = require('../../../support/pageObjects/LMS-1/MyPersonalLibraryPage')

describe("Verify School Admin ContantLibrary functionalities - Sprint 24(EL-7153,EL-7960)", function () {

    before(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearLocalStorageSnapshot();
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
        cy.saveLocalStorage();
    })
    beforeEach(function () {
        cy.restoreLocalStorage();
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminContentLibrary").as("adminContentLibrary")
    })

    it('ES7153_1  Validate user is able to view Share option for every content inside TopSchool Library/ Personal Library .',function () {
        adminDashboardPage.getSideMenuContentLibraryImg().click()
        adminContentLibraryPage.getContentLibraryCard().each(($ele)=>{
            var txt=$ele.text()
            if (txt=='Testing') {
                adminContentLibraryPage.getContentLibraryThreeDots(txt).click()
            }
        })
        adminContentLibraryPage.getContentLibraryShareContentLink().should('be.visible')
    })

    it('ES7153_2  "Validate two sub options are displayed when user click on ""Share Content""-Entire School ,-Specific Members "',function () {
        adminContentLibraryPage.getContentLibraryShareContentLink().click()
        adminContentLibraryPage.getContentLibraryShareContentEntireSchoolLink().should('be.visible')
        adminContentLibraryPage.getContentLibraryShareContentSpecificMembersLink().should('be.visible')
    })

    it('ES7153_3 Validate User on clicking "Entire School",the content is shared to entire school and respective members are notified.',function () {
        adminContentLibraryPage.getContentLibraryShareContentEntireSchoolLink().click()
    })

    it('ES7153_4 Validate user after sharing the resource to entire school the user gets a successful pop-up and redirected to the uploading content screen.',function () {
        cy.contains(this.adminContentLibrary.EntireSchoolSuccessfullyMessage)
        adminContentLibraryPage.getContentLibrarySuccessfulMessageCloseBtn().click()
    })

    it('ES7153_5 "Validate User on clicking ""Specific Members"", a pop up is displayed with list of -Students-Teachers -Admins along with + Add button against each name.-Share button.-Cancel button.-Go Back button',function () {
        adminContentLibraryPage.getContentLibraryCard().each(($ele)=>{
            var txt=$ele.text()
            if (txt=='Testing') {
                adminContentLibraryPage.getContentLibraryThreeDots(txt).click()
            }
        })
        adminContentLibraryPage.getContentLibraryShareContentLink().click()
        adminContentLibraryPage.getContentLibraryShareContentSpecificMembersLink().click()
        adminContentLibraryPage.getContentLibraryStudentsTab().click()
        cy.isVisible(adminContentLibraryPage.getContentLibraryStudentsTab())
        cy.isVisible(adminContentLibraryPage.getContentLibraryTeachersTab())
        cy.isVisible(adminContentLibraryPage.getContentLibraryAdminsTab())
        cy.isVisible(adminContentLibraryPage.getContentLibraryShareBtn())
        cy.isVisible(adminContentLibraryPage.getContentLibraryCancelBtn())
        cy.isVisible(adminContentLibraryPage.getContentLibraryGoBackBtn())
        adminContentLibraryPage.getContentLibrarypersonsList().each(()=>{
            cy.isVisible(adminContentLibraryPage.getContentLibraryAddBtn())
        })
        adminContentLibraryPage.getContentLibraryTeachersTab().click()
        adminContentLibraryPage.getContentLibrarypersonsList().each(()=>{
            cy.isVisible(adminContentLibraryPage.getContentLibraryAddBtn())
        })
        adminContentLibraryPage.getContentLibraryAdminsTab().click()
        adminContentLibraryPage.getContentLibrarypersonsList().each(()=>{
            cy.isVisible(adminContentLibraryPage.getContentLibraryAddBtn())
        })
    })

    it('ES7153_6  Validate a Search Option is available for (Student/Teacher/Admin) pop-up.',function () {
        adminContentLibraryPage.getContentLibraryStudentsTab().click()
        cy.isVisible(adminContentLibraryPage.getContentLibraryStudentSearchBoxTxt())
        adminContentLibraryPage.getContentLibraryTeachersTab().click()
        cy.isVisible(adminContentLibraryPage.getcontentLibrarySearchBoxTxt())
        adminContentLibraryPage.getContentLibraryAdminsTab().click()
        cy.isVisible(adminContentLibraryPage.getcontentLibrarySearchBoxTxt())
    })

    it('ES7153_9 Validate user on taping "Cancel" button, No changes are shared and the user is redirected to the content library.',function () {
        adminContentLibraryPage.getContentLibraryStudentsTab().click()
        adminContentLibraryPage.getContentLibraryAddBtn().click()
        adminContentLibraryPage.getContentLibraryCancelBtn().click()
    })

    

    it('ES7153_10 Validate user on taping "Go Back" button, No changes are shared and the user is redirected to the previous screen.',function () {
        adminContentLibraryPage.getContentLibraryShareContentSpecificMembersLink().click()
        adminContentLibraryPage.getContentLibraryGoBackBtn().click()
        cy.isVisible(adminContentLibraryPage.getContentLibraryShareContentSpecificMembersLink())
    })


    it('ES7153_8 Validate user on clicking the "Share" button, Content is shared with the selected members and respective member are notified.',function () {
        adminContentLibraryPage.getContentLibraryShareContentSpecificMembersLink().click()
        adminContentLibraryPage.getContentLibraryStudentsTab().click()
        adminContentLibraryPage.getContentLibraryAddBtn().click()
        adminContentLibraryPage.getContentLibraryShareBtn().click()
    })

    it('ES7960_1 Validate User is able to view option “others” while uploading files in Personal Library',function () {
        cy.wait(4000)
        cy.uncaughtException()
        myPersonalLibraryPage.getMyPersonalLibraryTab().click()
        myPersonalLibraryPage.getUploadResource().scrollIntoView().attachFile('LMS/SampleDocs-sample-pdf-file.pdf')
        myPersonalLibraryPage.getMyPorsonalLibraryResourceOthersRadioBtn().scrollIntoView().should('be.visible')
    })

    it('ES7960_2 Validate a chapter and topic as a non-mandatory option under “Which class is this content for?',function () {
        myPersonalLibraryPage.getMyPorsonalLibraryChapterMandaterySymbol().scrollIntoView().should('be.visible')
    })

    it('ES7960_3 "Validate whether Extensions to be allowed for others type - pdf, doc, Docx, mp4, ppt, jpeg/jpg/png "',function () {
        myPersonalLibraryPage.getUploadResource().scrollIntoView().attachFile('LMS/SampleDocs-sample-pdf-file.pdf')
    })
})