import React from 'react';
import { shallow } from 'enzyme';

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
    const enzymeWrapper = shallow(<Loading />);

    expect(enzymeWrapper.state('delayed')).toEqual(false);
  });

  it('delayed in state should be truthy when props delay is bigger than 0', () => {
    const enzymeWrapper = shallow(<Loading delay={100} />);

    expect(enzymeWrapper.state('delayed')).toEqual(true);
  });

  it('delayed key in state should remain truthy till delay time has passed', () => {
    const enzymeWrapper = shallow(<Loading delay={2000} />);

    jest.runTimersToTime(1000);

    expect(enzymeWrapper.state('delayed')).toEqual(true);
  });

  it('timeout should be undefined if delay prop is 0', () => {
    const enzymeWrapper = shallow(<Loading />);

    expect(enzymeWrapper.instance().timeout).toEqual(undefined);
  });

  it('timeout should not be undefined if delay prop is not 0', () => {
    const enzymeWrapper = shallow(<Loading delay={2000} />);

    jest.runTimersToTime(1000);

    expect(enzymeWrapper.instance().timeout).not.toEqual(undefined);
  });

  it('allows setting height and width with strings without propTypes warnings', () => {
    const spyConsoleError = jest.spyOn(global.console, 'error');
    const enzymeWrapper = shallow(<Loading height="20%" width="20%" />);
    expect(enzymeWrapper).toHaveLength(1);
    expect(spyConsoleError).not.toHaveBeenCalled();
    spyConsoleError.mockRestore();
  });
});
