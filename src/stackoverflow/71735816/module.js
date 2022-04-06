const functionUnderTest = async (helper) => {
  await helper.transaction(async (transaction) => {
    await helper.doSomething();
    await helper.doSomething2();
    await helper.expectedToBeCalled();
    console.log('done');
  });
};
module.exports = { functionUnderTest };
