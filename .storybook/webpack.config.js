const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, "..", "lib"),
    loaders: [
      "style-loader",
      {
        loader: "css-loader",
        options: { modules: true, importLoaders: 1 }
      },
      "postcss-loader"
    ]
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });

  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias["@lib"] = path.resolve(__dirname, "..", "lib");

  return config;
};
