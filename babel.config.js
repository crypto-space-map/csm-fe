const presets = [
  [
    '@babel/preset-env',
    {
      bugfixes: true,
      loose: true,
      targets: {
        esmodules: true,
      },
    },
  ],
  // [
  //   { autoLabel: 'dev-only', labelFormat: '[local]', useBuiltIns: false, throwIfNamespace: true },
  // ],
  '@babel/preset-typescript',
  ['@babel/preset-react', { useSpread: true, runtime: 'automatic' }],
];

module.exports = {
  presets,
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src/'],
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
      },
    ],
    [
      '@emotion',
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    ['@babel/plugin-proposal-optional-chaining', { loose: true }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
