import React, { Component, PropTypes } from 'react';
import * as svgSources from './svg';

export default class Loading extends Component {
  constructor() {
    super()
    this.state = {
      delayed: false
    };
  }

  componentWillMount() {
    const delayed = this.props.delay > 0;

    if (delayed) {
      this.setState({delayed: true});
      this._timeout = setTimeout(() => {
        this.setState({delayed: false});
      }, this.props.delay);
    }
  }

  componentWillUnmount() {
    this._timeout && clearTimeout(this._timeout);
  }

  render() {
    const type = this.state.delayed ? 'blank' : this.props.type;
    const svg = svgSources[type];
    const style = {
      fill: this.props.color,
      height: this.props.height,
      width: this.props.width
    };

    return (
      <div
        style={style}
        dangerouslySetInnerHTML={{__html:svg}}
      />
    );
  }
}
Loading.propTypes = {
  color: PropTypes.string,
  delay: PropTypes.number,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  type: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};
Loading.defaultProps = {
  color: '#fff',
  delay: 1000,
  height: 64,
  type: 'balls',
  width: 64
};
