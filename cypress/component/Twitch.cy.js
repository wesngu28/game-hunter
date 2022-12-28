import Twitch from '../../components/Twitch'

describe('Daggerfall has only two streams, no random and also 2 streams should be rendered', () => {
  it('Should be only two streams and also render an image', () => {
    cy.fixture('Daggerfall.json').then(stream => {
      cy.mount(<Twitch steam={null} twitch={stream} />)
      cy.get('#random').should('not.exist')
      cy.get('#twitch').find('iframe').should('have.length', 2);
      cy.get('img');
    })
  })
})

describe('Ashes should render 0 iframes', () => {
  it('should have no iframes', () => {
    cy.fixture('AshesEscalation.json').then(stream => {
      cy.mount(<Twitch steam={null} twitch={stream} />)
      cy.get('#random').should('not.exist')
      cy.get('#twitch').find('iframe').should('have.length', 0);
      cy.get('img');
    })
  })
})