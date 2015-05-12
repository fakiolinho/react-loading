var React = require('react');

var SVGs = {
  balls: require('./svg/loading-balls.svg'),
  bars: require('./svg/loading-bars.svg'),
  bubbles: require('./svg/loading-bubbles.svg'),
  cubes: require('./svg/loading-cubes.svg'),
  cylon: require('./svg/loading-cylon.svg'),
  spin: require('./svg/loading-spin.svg'),
  spinningBubbles: require('./svg/loading-spinning-bubbles.svg'),
  spokes: require('./svg/loading-spokes.svg')
};

module.exports = React.createClass({
  displayName: 'Loading',

  getDefaultProps: function() {
    return {
      color: '#fff',
      height: 64,
      type: 'balls',
      width: 64
    };
  },

  propTypes: {
    color: React.PropTypes.string,
    height: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    type: React.PropTypes.string,
    width: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ])
  },

  render: function () {
    var svg = SVGs[this.props.type];
    var svgStyle = {
      fill: this.props.color,
      height: this.props.height,
      width: this.props.width
    };

    return (
      <img style={svgStyle} src={"data:image/svg+xml;utf8,"+svg} />
    );
  }
});
