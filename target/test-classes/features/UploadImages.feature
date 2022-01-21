@image
Feature: Upload images from Desktop

  Background:
    Given User is on the web page, "url"
    When User click upload new image button

  Scenario: User can successfully upload jpeg type image from the Desktop
    And User upload the first image in jpeg format from the desktop
    Then First image in jpg format is successfully uploaded


  Scenario: User can successfully upload pneg type image from the Desktop
    And User upload the first image in png format from the desktop
    Then First image in png format is successfully uploaded

  Scenario: User can successfully upload gif type image from the Desktop
    And User upload the first image in gif format from the desktop
    Then First image in gif format is successfully uploaded


