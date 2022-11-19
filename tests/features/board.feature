@api @board
Feature: Board

    It defines scenarios for Board feature

    @001 @functional @smoke @deleteBoard
    Scenario: A board can be created (001)
        Given the user sets the following body:
            | name | New board from cucumber |
        When the "admin" user sends a "POST" request to "/boards" endpoint
        Then the response status code should be 200
        And the response body should have the following values:
            | name   | New board from cucumber |
            | closed | false                   |
            | pinned | false                   |
        And the schema response is verified with "boardSchema"
