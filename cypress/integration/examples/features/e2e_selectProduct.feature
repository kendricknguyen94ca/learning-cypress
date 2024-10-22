# Running by feature name: npx cypress run --spec **/features/*.feature --headed --browser chrome
# Running by tag: npx cypress run --env tags="@Tag1" --headed --browser chrome
Feature: E2E Select Product Successfully
    @Tag1
    Scenario: E2E Select Product Successfully
        Given user visit ECommercePage page
        When user add items to cart
        Then user go to checkout page and verify total amount 

    @Tag2
    Scenario: Filling the form to shop
        Given user visit ECommercePage page
        When user fill the form details
            | name | gender |
            | Bob  | Female |
        Then user validate the form behaviour
        And user select the Shop page