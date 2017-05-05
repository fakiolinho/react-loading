import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Loading from '../react-loading';

jest.useFakeTimers();

describe('test Loading component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Loading />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should show classes', () => {
    const enzymeWrapper = shallow(<Loading className="some-class" />);

    expect(enzymeWrapper.find('div').hasClass('some-class')).toBeTruthy();
  });

  it('delayed key in state should be equal to false if prop delay is 0', () => {
    const enzymeWrapper = shallow(<Loading delay={0} />);

    expect(enzymeWrapper.state('delayed')).toEqual(false);
  });

  it('delayed key in state should become true and and then false after delay time has passed', () => {
    const enzymeWrapper = shallow(<Loading delay={2000} />);

    expect(enzymeWrapper.state('delayed')).toEqual(true);

    jest.runTimersToTime(2000);

    expect(enzymeWrapper.state('delayed')).toEqual(false);
  });
});
