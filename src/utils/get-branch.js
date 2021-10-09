// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process');

exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
  if (err) {
    console.error(err);
    throw err;
  }

  if (typeof stdout === 'string') {
    process.env.BRANCH_NAME = stdout.trim().replace(/\//g, '-').toLowerCase();
    console.log(`current branch is: ${process.env.BRANCH_NAME}`);
  }
});
