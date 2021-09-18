const Mocha = require('mocha');
const { EVENT_RUN_END, EVENT_TEST_FAIL, EVENT_TEST_PASS } = Mocha.Runner.constants;

class TidyReporter {
  constructor(runner) {
    const stats = runner.stats;
    runner
      .on(EVENT_TEST_PASS, (test) => {
        console.log(`pass: ${test.fullTitle()}`);
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        console.log(`fail: ${test.fullTitle()} - error: ${err.message}`);
      })
      .once(EVENT_RUN_END, () => {
        console.log(`end: ${stats.passes}/${stats.passes + stats.failures} ok`);
      });
  }
}

module.exports = TidyReporter;
