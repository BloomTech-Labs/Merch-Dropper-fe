import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Footer from '../components/Footer';


const wrapper = shallow(<Footer />)

it('expect to render Footer component', () => {
    expect(wrapper.length).toEqual(1)
})

it('expect to verify class for corresponding html tags', () => {
    expect(wrapper.find('Navbar').hasClass('navStyle')).toBe(true);
    expect(wrapper.find('Form').hasClass('ml-5')).toBe(true);
    expect(wrapper.find('Button').hasClass('ml-3')).toBe(true);
    expect(wrapper.find('p').hasClass('pt-3 pl-5 ml-auto')).toBe(true);
});


it('expect to verify number of specific html tags rendered', () => {
    expect(wrapper.find('NavLink').length).toEqual(2);
    expect(wrapper.find('FormGroup').length).toEqual(1);
});