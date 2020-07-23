const plugins = [
  [
    "babel-plugin-transform-imports",
    {
      "@material-ui/core": {
        transform: "@material-ui/core/esm/${member}",
        preventFullImport: true
      },
      "@material-ui/lab": {
        transform: "@material-ui/lab/esm/${member}",
        preventFullImport: true
      },
      "@material-ui/icons": {
        transform: "@material-ui/icons/esm/${member}",
        preventFullImport: true
      }
    }
  ]
];

module.exports = { plugins };
