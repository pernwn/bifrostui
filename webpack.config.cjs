const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: { buttons: "./src/buttons.js" },
  output: {
    filename: "bifrost[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // Hvor filen skal gemmes
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Transpiler React (JSX) og moderne JS
          },
        },
      },
      {
        test: /\.css$/, // Matcher .css filer
        use: ["style-loader", "css-loader"], // Brug css-loader og style-loader til CSS filer
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
