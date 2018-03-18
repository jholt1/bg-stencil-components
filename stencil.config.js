exports.config = {
  namespace: 'bg-stencil-components',
  generateDistribution: true,
  serviceWorker: false,
  generateWWW: false,
  bundles: [{ components: ['bg-stencil-button'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
