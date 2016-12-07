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
    port: 8081,
    run: true
  }
};