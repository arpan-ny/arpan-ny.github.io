module.exports = {
  presets: [
    "@babel/preset-env", // Transpiles modern JavaScript to be compatible with target environments
    "@babel/preset-react", // Transpiles JSX
    "@babel/preset-typescript", // Transpiles TypeScript
  ],
  plugins: ['@babel/plugin-syntax-import-meta'],
};