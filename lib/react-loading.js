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
    let delayed = this.props.delay > 0;

    if (delayed) {
      this.setState({delayed: true});
      setTimeout(() => {
        this.setState({delayed: false});
      }, this.props.delay);
    }
  }

  render() {
    let type = this.state.delayed ? 'blank' : this.props.type;
    let svg = svgSources[type];
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
