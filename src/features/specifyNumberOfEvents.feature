Feature: Specify number of events

Scenario: The user has opened the app and made no changes
Given the app has been opened
When the user opens the app
Then the app should show the default number of events

Scenario: The user has selected a new number of events
Given the main page of the app is opened 
When the user changes the default number of events
Then the app should change to that number
