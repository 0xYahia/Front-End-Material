/// <reference types="cypress" />

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter')
  })

  it('should have a form', () => {
    cy.get('form').should('exist')
  })

  it('should contain word "Add Item"', () => {
    cy.contains('Add Item')
  })

  it('should input stuff in an input field', () => {
    cy.get('[data-test="new-item-input"]').type('Good attitude')
  })
});
