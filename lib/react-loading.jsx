import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as svgSources from './svg';

export default class Loading extends Component {
  static propTypes = {
    color: PropTypes.string,
    delay: PropTypes.number,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    type: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    className: PropTypes.string,
  };

  static defaultProps = {
    color: '#fff',
    delay: 1000,
    height: 64,
    type: 'balls',
    width: 64,
    className: '',
  };

  state = {
    delayed: false,
  };

  componentWillMount() {
    const { delay } = this.props;
    const delayed = delay > 0;

    if (delayed) {
      this.setState({ delayed: true });
      this.timeout = setTimeout(() => {
        this.setState({ delayed: false });
      }, delay);
    }
  }

  componentWillUnmount() {
    const { timeout } = this;

    if (timeout) {
      clearTimeout(timeout);
    }
  }

  render() {
    const { color, delay, type, height, width, className, ...restProps } = this.props;
    const selectedType = this.state.delayed ? 'blank' : type;
    const svg = svgSources[selectedType];
    const style = {
      fill: color,
      height,
      width,
    };

    return (
      <div
        style={style}
        dangerouslySetInnerHTML={{ __html: svg }}
        className={className}
        {...restProps}
      />
    );
  }
}
