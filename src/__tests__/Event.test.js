import React from "react";
import Event from "../Event";
import { mockData } from "../mock-data";
import { shallow } from "enzyme";

describe('<Event/> Compomnent', () => {

    const event = mockData[0];
    let EventWrapper;

    beforeAll(() => {
      EventWrapper = shallow(<Event event={event}/>);
    })

    test('renders all needed data while collapsed', () => {
        expect(EventWrapper.find('.title').text()).toBe(event.summary);
        expect(EventWrapper.find('.location').text()).toBe(event.location);
        expect(EventWrapper.find('.time').text()).toBe(new Date(event.start.dateTime).toString());
        expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
    });
    test('renders details button', () => {
        expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
    });
    test("expand details, when clicking show details", () => {
        const detailsButton = EventWrapper.find(".detailsButton");
        expect(detailsButton.text()).toBe("show details");
        expect(EventWrapper.find(".link")).toHaveLength(0);
        expect(EventWrapper.find(".description")).toHaveLength(0);
        detailsButton.simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
      });
      test("collapse details, when clicking hide details", () => {
        EventWrapper.setState({ collapsed: false });
        const detailsButton = EventWrapper.find(".detailsButton");
        expect(detailsButton.text()).toBe("hide details");
        expect(EventWrapper.find('.description')).toHaveLength(0);
        detailsButton.simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
      });
})
