const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Your main application entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
    publicPath: "/", // Public URL of the output directory when referenced in a browser
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Regex to match TypeScript and TSX files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Use babel-loader for transpilation
          options: {
            plugins: ['@babel/plugin-syntax-import-meta'],
            cacheDirectory: true, // Enable caching for faster rebuilds
          },
        },
      },
      {
        test: /\.css$/, // Regex to match CSS files
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Interprets @import and url() like import/require() and resolves them
          {
            loader: "postcss-loader", // Processes CSS with PostCSS (for Tailwind CSS)
            options: {
              postcssOptions: {
                plugins: [
                  require("tailwindcss"),
                  require("autoprefixer"), // Add vendor prefixes
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // For image assets
        type: "asset/resource", // Webpack 5 asset module type
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to your HTML template
      filename: "index.html", // Output HTML file name
      inject: "body", // Inject script tags into the body
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from public directory
    },
    compress: true, // Enable gzip compression
    port: 3000, // Port to run the dev server on
    historyApiFallback: true, // Fallback to index.html for HTML5 history API based routing
    hot: true, // Enable Hot Module Replacement (HMR)
  },
  performance: {
    hints: false, // Disable performance hints
  },
};
