# react-loading

Easy to use loading animations for React projects. Uses SVG animations from Brent Jackson's [loading](https://github.com/jxnblk/loading) project.

## Installation

```
npm install react-loading
```

## Demo

http://cezary.github.io/react-loading/

## Loading Types

* blank
* balls
* bars
* bubbles
* cubes
* cylon
* spin
* spinningBubbles
* spokes

## Example

```javascript
var React = require('react');
var Loading = require('react-loading');

var Component = React.createClass({
  render: function() {
    return (
      <Loading type='balls' color='#e3e3e3' />
    );
  }
});
```

## License

MIT
