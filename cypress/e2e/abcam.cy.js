describe('Abcam E-commerce Flow', () => {

  it('Select country, browse product and add to basket', () => {

    // Visit site
    cy.visit('https://www.abcam.com/', {
      timeout: 120000
    })

    // Handle country selection popup (if appears)
    cy.contains('India', { timeout: 10000 })
      .should('be.visible')
      .click()

    // OR fallback (if dropdown exists)
    // cy.get('select').select('India')

    // Search for a product
    cy.get('input[type="search"], input[placeholder*="Search"]', { timeout: 10000 })
      .type('antibody{enter}')

    // Click first product
    cy.get('a[href*="/products/"]', { timeout: 10000 })
      .first()
      .click()

    // Verify product page loaded
    cy.url().should('include', '/products')

    // Click Add to Basket
    cy.contains('Add to basket', { timeout: 10000 })
      .should('be.visible')
      .click()

    // Validate basket updated
    cy.contains('Basket').should('be.visible')
    // OR
    // cy.get('.basket-count').should('not.have.text', '0')

  })

})