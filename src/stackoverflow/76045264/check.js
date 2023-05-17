const check = {
  mysql: client =>
    cb => client.query('SELECT 1+1 AS result')
      .then(_ => {
        cb(null, {
          success: true,
        });
      })
      .catch(err => {
        cb(null, {
          success: !err,
          details: { err },
        })
      })
}

module.exports = { check }