import React from 'react'
import Form from '../../components/Form'

describe('<Form />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Form />)
  })
})