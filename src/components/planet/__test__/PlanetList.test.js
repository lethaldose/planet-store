import React from 'react';
import { mount, shallow } from 'enzyme';
import { PlanetList } from '../PlanetList';

describe('PlanetList Component', () => {
  const planet1 = {
    name: 'Mars',
    description: 'The best planet',
    imageUrl: 'https://dummy.jpeg',
    price: {
      amount: '111.40',
      currency: 'AUD'
    }
  };

  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      planets: [],
      fetchPlanets: jest.fn()
    };
  });

  it('fetches planets', () => {
    shallow(<PlanetList {...defaultProps} />);
    expect(defaultProps.fetchPlanets).toHaveBeenCalled();
  });

  it('render planets', () => {
    const props = { ...defaultProps, planets: [planet1] };
    const wrapper = shallow(<PlanetList {...props} />);
    expect(wrapper.find('Planet').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('render empty planets message', () => {
    const wrapper = mount(<PlanetList {...defaultProps} />);
    expect(wrapper.text()).toEqual('No planets available!');
  });
});
