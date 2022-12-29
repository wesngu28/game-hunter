describe('Terraria', () => {

  it('home page renders', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Details, Streams, and Prices')
    cy.get('input')
  })

  it('Should render its metacritic and DLC', () => {
    cy.searchForGame('Terraria');
    cy.get('#steam').children().should('contain', 'Dig, fight, explore, build!')
    cy.get('#steam').children().find('#meta').should('exist')
    cy.get('#steam').children().find('#dlc').should('exist')
    cy.get('#steam').children().find('#related').should('exist')
    cy.get('#steam').children().find('#header').should('exist')
    cy.get('#steam').children().find('#developer').should('exist')
  })

  it('it should get three streams and one random stream (unless terraria has died)', () => {
    cy.searchForGame('Terraria');
    cy.get('p')
    cy.get('#random')
    cy.get('#twitch').find('iframe').should('have.length', 3);
  })

  it('it should accurately get Terraria sales data (two platforms), as of winter 2022 sale', () => {
    cy.searchForGame('Terraria');
    cy.get('p').contains('Current Top Deals');
    cy.get('#itad').contains('Steam')
    cy.get('#itad').find('a').should('have.length', 2);
  })

})

describe('Almost There: The Platformer', () => {

  it('home page renders', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Details, Streams, and Prices')
    cy.get('input')
  })

  it('Should not have metacritic or any dlc', () => {
    cy.searchForGame('Almost There: The Platformer');
    cy.get('#steam').children().find('#meta').should('not.exist')
    cy.get('#steam').children().find('#dlc').should('not.exist')
    cy.get('#steam').children().find('#related').should('not.exist')
  })

  it('Should have no streamers', () => {
    cy.searchForGame('Almost There: The Platformer');
    cy.get('#twitch').should('not.exist')
  })

})

describe('battle breakers', () => {

  it('Should not have anything', () => {
    cy.searchForGame('Battle Breakers');
    cy.get('#steam').should('not.exist')
    cy.get('#twitch').should('not.exist')
    cy.get('#itad').should('not.exist')
    cy.get('a').should('contain', 'No Results')
  })

})

describe('Epic Games only test', () => {

  it('Should not render out Steam', () => {
    cy.searchForGame('PC Building Simulator 2');
    cy.get('#steam').should('not.exist')
  })

})

describe('no ITAD data should appear for Super Auto Pets', () => {

  it('Should not have ITAD', () => {
    cy.searchForGame('Super Auto Pets');
    cy.get('#itad').should('not.exist')
  })

})