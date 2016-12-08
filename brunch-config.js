module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/
      }
    },
    stylesheets: {
      joinTo: 'css/app.css'
    }
  },
  npm: {
    globals: {
      mdl: 'material-design-lite'
    }
  },
  plugins: {
    swPrecache: {
      options: {
        staticFileGlobs: [
          'public/**/*'
        ],
        navigateFallback: 'index.html',
        stripPrefix: 'public/'
      }
    }
  },
  server: {
    path: 'server.js',
    port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
    run: true
  }
};