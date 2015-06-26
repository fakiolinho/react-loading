import React, { Component, PropTypes } from 'react';
import * as svgSources from './svg';

export default class Loading extends Component {
  render() {
    let svg = svgSources[this.props.type];
    let svgStyle = {
      fill: this.props.color,
      height: this.props.height,
      width: this.props.width
    };

    return (
      <img style={svgStyle} src={"data:image/svg+xml;utf8,"+svg} />
    );
  }
}
Loading.propTypes = {
  color: PropTypes.string,
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
  height: 64,
  type: 'balls',
  width: 64
};
