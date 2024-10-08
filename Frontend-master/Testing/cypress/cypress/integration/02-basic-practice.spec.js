/// <reference types="cypress" />

describe('Basic Practice', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  describe('Adding a new item', () => {

    it('should put a new item on the page after clicking on "Add Item"', () => {
      const item = 'Good attitude'
      cy.get('[data-test="new-item-input"]').type(item)
      cy.get('[data-test="add-item"]').click()
      cy.get('form').submit()
    });

    it('should fail at clicking a button', (done) => {
      cy.get('[data-test="add-item"]').click();

      cy.once('fail', (error) => {
        expect(error.message).to.include('this element is `disabled`');

        done();
      });
    });

    it('should put a new item in the "Unpacked Items" list', () => {
      const item = 'Good attitude'
      cy.get('[data-test="new-item-input"]').type(item)
      cy.get('form').submit()
    });

    it('should put a new item as the last item in the "Unpacked Items" list', () => {
      const item = 'Good attitude'
      cy.get('[data-test="new-item-input"]').type(item)
      cy.get('form').submit()

      cy.get('[data-test="items-unpacked"] li').last().contains(item)
    });
  });

  describe('Filtering items', () => {
    it('should show items that match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('Tooth')

      // cy.contains('Tooth Brush')
      // cy.contains('Tooth Paste')
      cy.get('[data-test="items"]').each(($item) => {
        expect($item.text()).to.include('Tooth')
      })
    });

    it('should hide items that do not match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('Tooth')

      cy.contains('Hoodie').should('not.exist')
    });
  });

  describe('Removing items', () => {
    describe('Remove all', () => {
      it('should remove all of the items', () => {
        cy.get('[data-test="remove-all"]').click()
        cy.get('[data-test="items"] li').should('not.exist')
      });
    });

    describe('Remove individual items', () => {
      it('should have a remove button on an item', () => {
        cy.get('[data-test="items"] li').each($li => {
          cy.wrap($li).find('[data-test="remove"]').click();
          cy.wrap($li).should('not.exist')
        })
      });

      it('should remove an item from the page', () => {});
    });
  });

  describe('Mark all as unpacked', () => {
    it('should empty out the "Packed" list', () => {
      cy.get('[data-test="items-packed"] > ul.s-vF8tIk32PFgu > li.s-vF8tIk32PFgu >').each(($item, index => {
        cy.wrap($item).find(`#item-${index}`).uncheck()
      }))
    });

    it('should empty have all of the items in the "Unpacked" list', () => {});
  });

  describe('Mark individual item as packed', () => {
    it('should move an individual item from "Unpacked" to "Packed"', () => {});
  });
});
