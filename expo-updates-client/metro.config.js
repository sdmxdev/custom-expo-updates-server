const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Set projectRoot to the actual app root
config.projectRoot = __dirname;

// Add all symlink targets
config.watchFolders.push(
  path.resolve(__dirname, '../../assets'),
  path.resolve(__dirname, '../../components'),
  path.resolve(__dirname, '../../constants'),
  path.resolve(__dirname, '../../context'),
  path.resolve(__dirname, '../../hooks'),
  path.resolve(__dirname, '../../types')
);

// Explicitly tell Metro to resolve modules from expo-updates-client
config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [path.resolve(__dirname, 'node_modules')],
};

module.exports = config;
