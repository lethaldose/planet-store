import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { PlanetList } from '../PlanetList';

describe('PlanetList Component', () => {
  const planet1 = {
    name: 'Mars',
    description: 'The best planet',
    imageUrl: 'https://dummy.jpeg',
    price: {
      amount: '111.40',
      currency: 'AUD'
    },
    area: {
      value: '1231000.12',
      unit: 'sq km'
    },
    radius: {
      value: '12310',
      unit: 'km'
    },
    orbitPeriod: {
      value: '2323',
      unit: 'days'
    },
    gravity: {
      value: '3.23',
      unit: 'm/s2'
    },
    temperature: {
      value: '213.12',
      unit: 'C'
    }
  };

  let defaultProps;

  const getComponent = props => {
    return (
      <BrowserRouter>
        <PlanetList {...props} />
      </BrowserRouter>
    );
  };

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
    const wrapper = mount(getComponent(props));
    expect(wrapper.find('div.planet-card').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('render empty planets message', () => {
    const wrapper = mount(getComponent(defaultProps));
    expect(wrapper.text()).toEqual('No planets available!');
  });
});
