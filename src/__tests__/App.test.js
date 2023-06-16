import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { extractLocations, getEvents } from '../api';
import { mockData } from '../mock-data';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App/>)
    });
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOFEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});
describe('<App /> intergration', () => {
    test('App passes "Events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App/>);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });
    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
      });
    test('get list of evetns matching the selected city by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggustions: locations});
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();

    });
    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
      });

      test("events state changes number of events changes", () => {
        const AppWrapper = mount(<App />);
        const eventCount = AppWrapper.state("count");
        expect(eventCount).toEqual(AppWrapper.find(NumberOfEvents).props().query);
        AppWrapper.unmount();
      });
    
      test("get list of events matching the number of events selected by the user", async () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const selectedNumber = 10;
        const event = { target: { value: selectedNumber } };
        await NumberOfEventsWrapper.instance().handleInputChanged(event);
        NumberOfEventsWrapper.find('.count').simulate('change', event)
        expect(NumberOfEventsWrapper.state("query")).toEqual(selectedNumber);
        expect(AppWrapper.state("events").length).toBe(4);
      });
});
