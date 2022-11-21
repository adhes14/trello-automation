@ui
Feature: Login

    Defines test scenarios for login feature

    Scenario: A user can't login into Trello without a password
        When the user logs into Script with:
            | username | adhemar.duran@fundacion-jala.org |
            | password |                                  |
        Then the error label should display "Enter your password"