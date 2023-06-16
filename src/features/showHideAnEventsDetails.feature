Feature: Show/Hide event details

Scenario: When a user opens the app, all events should be collapsed
Given user has not opened any details
When the user opens the app
Then the user should see a collapsed list of events

Scenario: When a user clicks the details button, it should show the details
Given the main page is open
When the user clicks the details button
Then the user should see the details of the event

Scenario: When a user clicks the close button, it should collapse
Given a event has been opened
When the user clicks the close button
Then the event details should collapse