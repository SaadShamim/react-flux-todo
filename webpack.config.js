module.exports = {
	entry: "./src/app.js",
    output: {
        path: "./public",
        filename: "build.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
      ]
    }
}

