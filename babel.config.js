module.exports = function (api) {
  api.cache(false);
  const isCommonJs = process.env.BABEL_ENV === 'commonjs';
  const target = isCommonJs ? { node: 6 } : { ie: 11 };
  const presets = [
    [
      "@babel/env",
      {
        "targets": target,
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ];
  // const plugins = isCommonJs ? ["transform-es2015-modules-simple-commonjs"] : [];
  // return { presets, plugins };
  return { presets };
};