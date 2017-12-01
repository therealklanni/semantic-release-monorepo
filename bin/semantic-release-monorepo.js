#!/usr/bin/env node
const execa = require('execa');
const { argv } = process;
const args = argv.slice(2);

const args2 = args.concat([
  '--generate-notes=semantic-release-monorepo',
  `--analyze-commits='[{ path: 'semantic-release-monorepo' }]`
]);

execa('semantic-release', args2, { stdio: 'inherit' });