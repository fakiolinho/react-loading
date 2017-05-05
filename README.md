# react-loading

[![Build Status](https://travis-ci.org/fakiolinho/react-loading.svg?branch=master)](https://travis-ci.org/fakiolinho/react-loading) [![Coverage Status](https://coveralls.io/repos/github/fakiolinho/react-loading/badge.svg?branch=master)](https://coveralls.io/github/fakiolinho/react-loading?branch=master)

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
