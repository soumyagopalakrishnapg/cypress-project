describe('Contact Us Form Test', () => {

  it('Fill and submit Contact Us form', () => {

    // Visit page
    
   cy.visit('https://uat-dxweb104.beccloud.com/en/support/contact-us', {
  timeout: 120000,
  failOnStatusCode: false
})

    // Verify page
    cy.contains('Contact Us', { timeout: 60000 }).should('be.visible')

    // Select dropdowns (adjust text if needed)
    cy.contains('Select country/region').parent().find('select').select(1)

    cy.get('select').eq(1).select(1) // Request More Information
    cy.get('select').eq(2).select(1) // Inquiry Category
    cy.get('select').eq(3).select(1) // Sub-category

    // Fill text fields
    cy.get('input').eq(0).type('Test User')        // First Name
    cy.get('input').eq(1).type('User')             // Last Name
    cy.get('input').eq(2).type('testuser@gmail.com') // Email
    cy.get('input').eq(3).type('1234567890')       // Phone
    cy.get('input').eq(4).type('Test Company')     // Company
    cy.get('input').eq(5).type('Tester')           // Department/Role

    // Job Title dropdown
    cy.get('select').last().select(1)

    // Comments
    cy.get('textarea').type('This is a Cypress automation test message')

    // Select consent radio button
    cy.contains('I Consent').click()

    // Click Send Request
    cy.contains('Send Request')
      .should('be.visible')
      .click()

    // Validation (update based on actual behavior)
    cy.contains('Thank').should('be.visible')
    // OR
    // cy.url().should('include', 'success')

  })

})