
export class homePage {

    weblocators = {
        search_input: '.form-control',
        click_search: '.input-group-btn > .btn',
        product: 'img[title="MacBook"]',
        addToCart: 'Add to Cart',
        successMessage: '.alert'
    }
    searchProduct(productName) {
        cy.get(this.weblocators.search_input).type(productName)
    }
    clickSearch() {
        cy.get(this.weblocators.click_search).click()
    }
    
    clickAddToCart() {
        cy.contains(this.weblocators.addToCart).first().click()
    }
    verifySuccessMsg(successMessage) {
        return cy.get(this.weblocators.successMessage)
    }
}