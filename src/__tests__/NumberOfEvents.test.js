import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import { shallow } from "enzyme";

describe('<NumberOfEvents /> Compoment', () => {
    
    let NumberOfEventsWrapper, query;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
        query = NumberOfEventsWrapper.state('query');
    })

    test('Render default input', () => {
        expect(NumberOfEventsWrapper.find('.count')).toHaveLength(1);
    });
    test('Check default number', () => {
        expect(NumberOfEventsWrapper.find('.count').prop('value')).toBe(query);
    })
    test('Check acceptance of diffrent amount', () => {
        NumberOfEventsWrapper.setState({
            query: 32
          });
          const eventObject = { target: { value: 10 }};

        NumberOfEventsWrapper.find('.count').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe(10);
    })
});