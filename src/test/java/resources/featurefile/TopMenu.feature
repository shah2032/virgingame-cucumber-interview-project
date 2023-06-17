

@smoke
Feature: TopMenu
  As user I want to navigate to selected menu page

  Scenario Outline: User should navigate to selected menu page
    Given I am on homepage
    And I accept cookies
    When I click on any menu from "<TopMenu tab>"
    Then I navigate to selected menu page "<Navigate Page>"
    Examples:
      | TopMenu tab       | Navigate Page     |
      | Online Slots      |  Online Slots     |
      | Live Casino       |  Live Casino      |
      | Casino            | Casino            |
      |Online Bingo       |   Online Bingo    |
      |Free Games         |  Free Games       |
      | Poker             |  Poker            |
      |All Games          | All Games         |