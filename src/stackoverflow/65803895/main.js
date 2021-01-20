const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
  console.log('=== start ===');
  try {
    const generate = await exec('npm run generate');
    if (generate.stderr) {
      console.log('\n' + generate.stdErr);
      return;
    }
    console.log(generate.stdout);
  } catch (error) {
    console.log('\n' + error);
    return;
  }

  console.log('=== next ===');
}

main();
