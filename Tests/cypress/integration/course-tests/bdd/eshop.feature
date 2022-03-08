Feature: Eshop capabilities

    End to end testing for course purposes.

    @Regression
    Scenario: Eshop product order validation
        Given the user is on the shopping page
        When the user adds a product
            | productName | price  |
            | Blackberry  | 50000  |
            | iphone X    | 100000 |
        And the user goes to checkout
        And the user fills in their info
        Then the user receives a confirmational dialog message

    @Smoke
    Scenario: Eshop input fields validation
        Given the user is on the home page
        When the user fills in the required inputs successfully
        And the user clicks submit
        Then the user receives a confirmational alert dialog

    @Regression
    Scenario: Eshop multiple products order validation
        Given the user is on the shopping page
        When the user has added multiple products
        And the user goes to products checkout
        Then the price is calculated correctly