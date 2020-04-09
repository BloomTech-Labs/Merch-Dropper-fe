import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ProductCard from '../components/ProductCard';

const product = {
    url: 'www.facebook.com',
    design: 'design',
    color: 'red',
    price: '$24'
}

const wrapper = shallow(<ProductCard product={product} />)

it('expect to render ProductCard component', () => {
    expect(wrapper.length).toEqual(1)
})

it('expect to verify class for corresponding html tags', () => {
    expect(wrapper.find('button').hasClass('btn-primary cardBtn')).toBe(true);
    expect(wrapper.find('CardBody').hasClass('product-card-padding')).toBe(true);
    expect(wrapper.find('CardTitle').hasClass('h5 text-center')).toBe(true);
});

it('expect to verify number of specific html tags rendered', () => {
    expect(wrapper.find('CardImg').length).toEqual(1);
    expect(wrapper.find('CardText').length).toEqual(2);
})

it('expect to verify what type of value is the prop property', () => {
    expect(wrapper.find(`${product.url}`)).toEqual({});
})



