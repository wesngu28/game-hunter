import Steam from '../../components/Steam'

describe('Almost There: The Platformer component', () => {
  it('Should not have metacritic or any dlc', () => {
    cy.fixture('AlmostThere.json').then(steam => {
      cy.mount(<Steam steam={steam} />)
      cy.get('#meta').should('not.exist')
      cy.get('#dlc').should('not.exist')
      cy.get('#related').should('not.exist')
    })
  })

})

describe('Terraria component', () => {
  it('Should have metacritic, dlc, and everything else', () => {
    cy.fixture('Terraria.json').then(steam => {
      cy.mount(<Steam steam={steam} />)
      cy.get('#steam').children().should('contain', 'Dig, fight, explore, build!')
      cy.get('#meta').should('exist').should('have.css', 'color', 'rgb(0, 128, 0)')
      cy.get('#dlc').should('exist')
      cy.get('#related').should('exist')
      cy.get('#header').should('exist')
      cy.get('#developer').should('exist')
    })
  })

})