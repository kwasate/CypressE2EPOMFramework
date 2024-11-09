/// <reference types = "cypress"/>
import { homePage } from "../../pages/homePage";
const homePageObj = new homePage()
import testData from "../../fixtures/testData.json"

describe('Move the required item to the Add to Cart section', () => {
    before(()=>{
        cy.login(testData.login.email, testData.login.password)
    })
    it('Add to Cart the product', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.clickSearch()
        //homePageObj.selectProduct()
        homePageObj.clickAddToCart()
        homePageObj.verifySuccessMsg().should('contain', testData.successMessage.Message).and('contain',testData.product.productName)
    })
})