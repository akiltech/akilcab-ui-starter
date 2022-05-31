// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}

module.exports = {
  webpack: {
    alias: {
      '@app': srcPath('app'),
      '@pages': srcPath('app/pages'),
      '@modules': srcPath('app/modules'),
      '@core': srcPath('core'),
      '@guards': srcPath('core/guards'),
      '@interceptors': srcPath('core/interceptors'),
      '@services': srcPath('core/services'),
      '@utils': srcPath('core/utils'),
      '@shared': srcPath('shared'),
      '@components': srcPath('shared/components'),
      '@layouts': srcPath('shared/layouts'),
      '@theme': srcPath('theme')
    }
  }
};
