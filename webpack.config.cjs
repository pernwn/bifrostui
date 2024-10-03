const path = require("path");

module.exports = {
  entry: "./src/App.jsx", // Angiv din hoved JS-fil eller indgangspunkt
  output: {
    filename: "./src/interface/buttons.jsx", // Navn på outputfil
    path: path.resolve(__dirname, "dist"), // Placering af output (dist-mappen)
  },
  mode: "production", // For minimering og optimering
};
