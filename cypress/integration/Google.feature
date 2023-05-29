Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    When I search for "Cheese"
    Then the page title should start with "Cheese"