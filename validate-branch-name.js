const chalk = require('chalk');
const { exec } = require('child_process');

exec('git rev-parse --abbrev-ref HEAD', (_, branchName) => {
  const validBranchesRegex = /(feat|fix)\/FINOPS-\d+(-\w+)*/;

  if (['master'].includes(branchName)) {
    return;
  }

  if (!validBranchesRegex.test(branchName)) {
    const msg =
      'Branch names in this project must satisfy to this contract: name should be one of: feat/FINOPS-*, fix/FINOPS-*';
    console.log(chalk.bgRed.black.bold(msg));
    process.exit(1);
  }
});
