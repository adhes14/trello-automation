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

    @002 @functional @smoke @createBoard
    Scenario: A board can be deleted (002)
        When the "admin" user sends a "DELETE" request to "/boards/(board.id)" endpoint
        Then the response status code should be 200

    @003 @functional @smoke @createBoard @deleteBoard
    Scenario: A board can be requested (003)
        When the "admin" user sends a "GET" request to "/boards/(board.id)" endpoint
        Then the response status code should be 200
        And the response body should have the following values:
            | name   | New board from hook |
            | closed | false               |
            | pinned | false               |
        And the schema response is verified with "boardSchema"

    @004 @functional @smoke @createBoard @deleteBoard
    Scenario: A board can be updated (003)
        Given the user sets the following body:
            | name             | Updated board |
            | labelNames/green | done          |
        When the "admin" user sends a "PUT" request to "/boards/(board.id)" endpoint
        Then the response status code should be 200
        And the response body should have the following values:
            | name             | Updated board |
            | closed           | false         |
            | pinned           | false         |
            | labelNames.green | done          |
        And the schema response is verified with "boardSchema"

    @005 @006 @007 @negative
    Scenario Outline: A board cannot be requested <title> id (<id>)
        When the "admin" user sends a "GET" request to "/boards/<invalidData>" endpoint
        Then the response status code should be <statusCode>

        Examples:
            | id  | title               | invalidData              | statusCode |
            | 005 | without an          |                          | 404        |
            | 006 | with an invalid     | abc                      | 400        |
            | 007 | with a non-existent | 637a09c36a35160189f11425 | 404        |

