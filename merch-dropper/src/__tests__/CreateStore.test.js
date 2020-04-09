import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import CreateStore from "../components/Auth/CreateStore";

const wrapper = mount(<CreateStore />);

it("renders the CreateStore component", () => {
  console.log(wrapper.debug());
  expect(wrapper.length).toEqual(1);
});
