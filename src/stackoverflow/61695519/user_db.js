const db = require('./index.js');

async function usernameExists(username) {
  const user = await db.user.findOne({
    where: { username },
  });
  if (user) return user;
  return false;
}

module.exports = { usernameExists };
