# react-loading

[![Build Status](https://travis-ci.org/fakiolinho/react-loading.svg?branch=master)](https://travis-ci.org/fakiolinho/react-loading) [![Coverage Status](https://coveralls.io/repos/github/fakiolinho/react-loading/badge.svg?branch=master)](https://coveralls.io/github/fakiolinho/react-loading?branch=master)

Easy to use loading animations for React projects. Uses SVG animations from Brent Jackson's [loading](https://github.com/jxnblk/loading) project.

## Installation

```
npm i react-loading
```
or

```
yarn add react-loading
```

## Demo

Check [here](https://www.webpackbin.com/bins/-KmrzFstbIElhoFgQX96)

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
import React from 'react';
import ReactLoading from 'react-loading';

const Example = ({ type, color }) => (
	<ReactLoading type={type} color={color} height='667' width='375' />
);

export default Example;
```

### Props

| Name | Type | Default Value |
|:------:|:------:|:---------------:|
| type | String | balls |
| color | String | `#ffffff` |
| delay | Number | 1000 (msecs) |
| height | Number or String | 64 (px) |
| width | Number or String | 64 (px) |
| className | String | `''` |


## License

MIT
