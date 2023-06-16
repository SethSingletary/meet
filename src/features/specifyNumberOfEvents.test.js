const { shallow } = require("enzyme");
const { loadFeature, defineFeature } = require("jest-cucumber");
import NumberOfEvents from "../NumberOfEvents";

let feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('The user has opened the app and made no changes', ({ given, when, then }) => {
    	given('the app has been opened', () => {

    	});

        let NumberOfEventsWrapper;
    	when('the user opens the app', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents/>);

    	});

    	then('the app should show the default number of events', () => {
            expect(NumberOfEventsWrapper.find('.count')).toHaveLength(1);

    	});
    });

    test('The user has selected a new number of events', ({ given, when, then }) => {
    	given('the main page of the app is opened', () => {

    	});

        let NumberOfEventsWrapper;
    	when('the user changes the default number of events', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
            NumberOfEventsWrapper.setState({query: 1});

    	});

    	then('the app should change to that number', () => {
            const eventObject = { target: { value: 10 }};
            NumberOfEventsWrapper.find('.count').simulate('change', eventObject);
            expect(NumberOfEventsWrapper.state('query')).toBe(10);
    	});
    });
})