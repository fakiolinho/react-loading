// rollup.config.js
import babel from 'rollup-plugin-babel';
import stringPlugin from 'rollup-plugin-string';

const babelOptions = (production) => {
  const result = {
    babelrc: false,
    presets: [['env', { modules: false }], 'stage-2', 'react'],
    plugins: ['external-helpers'],
  };
  if (production) {
    result.plugins.push('transform-react-remove-prop-types');
  }
  return result;
};

export default {
  input: 'lib/react-loading.jsx',
  output: {
    file: 'dist-es/react-loading.js',
    format: 'es',
  },
  plugins: [
    stringPlugin({ include: '**/*.svg' }),
    babel(babelOptions(false)),
  ],
};
