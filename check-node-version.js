const semver = require('semver');
const { exec } = require('child_process');
const { engines } = require('./package.json');
const version = engines.node;

if (!semver.satisfies(process.version, version)) {
  try {
    throw new Error(
      `The current node version${process.version} does not satisfy the required version ${version} .\n
      Your node_modules will be uninstalled`
    );
  } catch (error) {
    console.error(error.message);
    exec('rm -rf node_modules');
    process.exit(1);
  }
}
