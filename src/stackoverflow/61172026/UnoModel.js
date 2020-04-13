// simulate mongodb
const mongodb = {
  findById(arg1, arg2) {
    return { name: 'james' };
  },
};
exports.getGameInfo = async function(id) {
  return await mongodb.findById('uno', id);
};
