As a developer, I should be able to have the events collapsed, so that they take up less space
Given: Nothing has been done to the app
When: The user opens the app
Then: The user should see a list of event titles

As a user, I should be able to expand an event to see its details, so that I know about it
Given: The list of events has been opened
When: The expand button has been tapped
Then: The events details will be shown

As a user, I should be able to collapse an event, so that it takes up less space
Given: An expanded event is open
When: The collapse button is tapped
Then: The event collapses





As a developer, I should specify a default number of events, so that it is always showing a certain amount
Given: User hasn’t changes how many cities to show
When: The main page is opened
Then: Shows a list of items equal to the default

As a user, I should be able to change how many events I see at once, so that I am not overwhelmed by information
Given: The user wants to change how many events are shown
When: The selector for how many entries shown is opened
Then: Change the number of events shown to that number






As a developer, I should make sure my app is available offline, so that it can always be used
Given: The app is opened offline
When: The app is opened with no connection
Then: Show a static version of the app using old data

As a developer, I should make sure my app will give an error if someone try to change their setting while offline, so that they can always see some events
Given: User is changing settings offline
When: The settings tab is modified while offline
Then: Give an error saying they can’t change that while offline





As a developer, I should make sure all events can be seen for a certain city, so that everyone knows what’s going on
Given: The app is opened for a specific city
When: The user has opened the basic app
Then: Show a list of all events in calendar format

Meet is an app designed to show you events going on in all citys! It includes an offline mode where you can see events that had been previosuly loaded for you