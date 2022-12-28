import Itad from '../../components/Itad'

describe('Elden Ring should display sales data, up to four and always Steam', () => {
  it('Should be four, one of which is always Steam', () => {
    cy.fixture('EldenRing.json').then(game => {
      cy.mount(<Itad itad={game} />)
      cy.get('#itad').contains('Steam')
      cy.get('#itad').find('a').should('have.length', 4);
      cy.get('p').contains('Current Top Deals');
    })
  })
})

describe('PC build sim should have only one, with no steam', () => {
  it('EGS game should only have EGS as a child', () => {
    cy.fixture('PCBuildingSim2.json').then(game => {
      cy.mount(<Itad itad={game} />)
      cy.get('#itad').should('not.contain', 'Steam')
      cy.get('#itad').find('a').should('have.length', 1);
      cy.get('p').contains('Current Top Deals');
    })
  })
})