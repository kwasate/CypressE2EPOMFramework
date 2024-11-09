
/// <reference types = "cypress"/>
export class registerPage {
   
    webLocators = {
        firstName: "#input-firstname",
        lastname: "#input-lastname",
        email: "#input-email",
        telePhone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        checkBox: "input[type=checkbox]",
        continueButton: ".btn-primary"
    }

    openURL() {
        cy.visit(Cypress.env('URL'))

        }
    enterFirstName(Fname) {
        cy.get(this.webLocators.firstName).type(Fname)
    }
    enterLastName(Lname) {
        cy.get(this.webLocators.lastname).type(Lname)
    }
    enterEmail(email) {
        cy.get(this.webLocators.email).type(email)
    }
    enterTelephone(telephone) {
        cy.get(this.webLocators.telePhone).type(telephone)
    }
    enterPassword(password) {
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.confirmPassword).type(password)
    }

    selectCheckbox() {
        cy.get(this.webLocators.checkBox).check()
    }
    clickContinue() {
        cy.get(this.webLocators.continueButton).click()
    }
}
