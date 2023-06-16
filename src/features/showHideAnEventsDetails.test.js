import { mount, shallow } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
    test('When a user opens the app, all events should be collapsed', ({ given, when, then }) => {
    	given('user has not opened any details', () => {

    	});

    	when('the user opens the app', () => {

    	});

    	then('the user should see a collapsed list of events', () => {
            let EventWrapper = shallow(<Event event={mockData[0]}/>);
            expect(EventWrapper.state('collapsed')).toBe(true);

    	});
    });

    test('When a user clicks the details button, it should show the details', ({ given, when, then }) => {
    	given('the main page is open', () => {

    	});
        let EventWrapper;
    	when('the user clicks the details button', () => {
            EventWrapper = shallow(<Event event={mockData[0]}/>);
            let detailsButtonWrapper = EventWrapper.find('.detailsButton');
            detailsButtonWrapper.simulate('click');

    	});

    	then('the user should see the details of the event', () => {
            expect(EventWrapper.state('collapsed')).toBe(false);

    	});
    });

    test('When a user clicks the close button, it should collapse', ({ given, when, then }) => {
    	given('a event has been opened', () => {

    	});
        let EventWrapper;
    	when('the user clicks the close button', () => {
            EventWrapper = shallow(<Event event={mockData[0]}/>);
            EventWrapper.setState({collapsed: false})
            let detailsButtonWrapper = EventWrapper.find('.detailsButton');
            detailsButtonWrapper.simulate('click');
    	});

    	then('the event details should collapse', () => {
            expect(EventWrapper.state('collapsed')).toBe(true);

    	});
    });
});