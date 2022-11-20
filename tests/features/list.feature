@api @list
Feature: List

    It defines scenarios for List feature

    @008 @functional @smoke @createBoard @archiveList @deleteBoard
    Scenario: A list can be created (008)
        Given the user sets the following body:
            | name    | New List from cucumber |
            | idBoard | (board.id)             |
        When the "admin" user sends a "POST" request to "/lists" endpoint
        Then the response status code should be 200
        And the response body should have the following values:
            | name    | New List from cucumber |
            | closed  | false                  |
            | idBoard | (board.id)             |
        And the schema response is verified with "listSchema"

    @009 @functional @smoke @createBoard @createList @archiveList @deleteBoard
    Scenario: A list can be requested (009)
        When the "admin" user sends a "GET" request to "/lists/(list.id)" endpoint
        Then the response status code should be 200
        And the response body should have the following values:
            | name    | New list from hook |
            | closed  | false              |
            | idBoard | (board.id)         |
        And the schema response is verified with "listSchema"

    @010 @functional @smoke @createBoard @createList @deleteBoard
    Scenario: A list can be updated (010)
        Given the user sets the following body:
            | value | true |
        When the "admin" user sends a "PUT" request to "/lists/(list.id)/closed" endpoint
        Then the response status code should be 200
        And the response body should have the following values:
            | name    | New list from hook |
            | closed  | true               |
            | idBoard | (board.id)         |
        And the schema response is verified with "listSchema"

    @011 @012 @013 @negative
    Scenario Outline: A list cannot be requested <title> id (<id>)
        When the "admin" user sends a "GET" request to "/lists/<invalidData>" endpoint
        Then the response status code should be <statusCode>

        Examples:
            | id  | title               | invalidData              | statusCode |
            | 011 | without an          |                          | 404        |
            | 012 | with an invalid     | abc                      | 400        |
            | 013 | with a non-existent | 637a0eeb50d0b1041ac2ecag | 400        |
