#!/usr/bin/env node
const execa = require('execa');
const { argv } = process;
const args = argv.slice(2);

async function run() {
  const { stdout } = execa('semantic-release', args, { stdio: 'inherit' });
  stdout.pipe(process.stdout);
}

run();

