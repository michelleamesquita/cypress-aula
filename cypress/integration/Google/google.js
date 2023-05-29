import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'

const url = 'https://google.com.br'
const SEARCH =  "//textarea[@title='Pesquisar']"

Given('I open Google page', () => {
  cy.visit(url)
})

When(`I search for {string}`, (text) => {
  cy.xpath(SEARCH).type(text)
  cy.xpath(SEARCH).should('be.visible').type('{ENTER}')
})

Then(`the page title should start with {string}`, (title) => {
  cy.title().should('include', title)
})
