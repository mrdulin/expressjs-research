module.exports = (myHandler) => ({
  getStuff: async (req, res, next) => {
    const var1 = 'something1';
    const var2 = 'something2';
    const my_response = await myHandler.handle()(var1, var2);
    return my_response;
  },
});
