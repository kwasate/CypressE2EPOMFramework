/// <reference types = "cypress"/>
import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage
import registerData from '../../fixtures/registerData.json'
describe('New User Registration', () => {

	it('registerFlow', () => {
		registerObj.openURL()
		registerObj.enterFirstName(registerData.Fname)
		registerObj.enterLastName(registerData.Lname)
		registerObj.enterEmail(registerData.email)
		registerObj.enterTelephone(registerData.telephone)
		registerObj.enterPassword(registerData.password)
		registerObj.selectCheckbox()
		registerObj.clickContinue()
	})
})