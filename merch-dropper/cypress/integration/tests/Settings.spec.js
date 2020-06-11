describe('Settings Component (Development)', () => {
    it('reroutes to landing page with no auth token', () => {
      cy.visit("http://localhost:3000/dashboard")
      //add element checks here for landing page
      cy.get('.BrandTitle').contains('Merch Dropper')
    })
    it('renders connect to stripe cta for users not connected', () => {
        cy.visit("http://localhost:3000/dashboard")
        cy.get('.links.login').click()
        cy.get('.dev-email').type('thorodinson@avengers.com')
        cy.get('.dev-password').type('pointbreak')
        cy.get('.dev-register').click()
        cy.get('.sc-pZBmh.bEkKGq').click()
        cy.contains('Skip for now').click()
        cy.contains('Connect to Stripe')
    })
    // it('renders create store cta for users who have not yet')
    // it.todo('renders storefront status and information for completed store')
    // it.todo('connect stripe cta routes to stripe setup')
    // it.todo('create store cta routes to create store')
  })