import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import { shallow } from "enzyme";

describe('<NumberOfEvents /> Compoment', () => {
    test('Render default input', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
        expect(NumberOfEventsWrapper.find('.count')).toHaveLength(1);
    });
    test('Check default number', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
        const query = NumberOfEventsWrapper.state('query');
        expect(NumberOfEventsWrapper.find('.count').prop('value')).toBe(query);
    })
    test('Check acceptance of diffrent amount', () => {
        const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
        const query = NumberOfEventsWrapper.state('query');

        NumberOfEventsWrapper.setState({
            query: 32
          });
          const eventObject = { target: { value: 10 }};

        NumberOfEventsWrapper.find('.count').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe(10);
    })
});