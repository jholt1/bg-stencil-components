exports.config = {
  namespace: 'bg-stencil-components',
  generateDistribution: true,
  serviceWorker: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
