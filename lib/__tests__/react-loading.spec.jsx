import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../react-loading';

describe('test Loading component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Loading />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('show classes', () => {
    const enzymeWrapper = shallow(<Loading className="some-class" />);

    expect(enzymeWrapper.find('div').hasClass('some-class')).toBeTruthy();
  });
});
