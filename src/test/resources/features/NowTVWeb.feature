
Feature: Picking the membership

  @nowtv
  Scenario: User can successfully add Cinema Membership and checkout
    Given User is on the home page
    When User select the film
    And User click start free trial
    Then User add cinema membership
    And User click checkout
    When User continues to checkout
    Then User should be on the personal details page
