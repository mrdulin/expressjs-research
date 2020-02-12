const validation = require('./validation');

class AccountController {
  sum(req, res) {
    const validator = new validation.register();
    const check = validator.validate(req.body.form);

    let count = 0;

    if (check) {
      count += 1;
    } else {
      count -= 1;
    }

    res.send(count);
  }
}

module.exports = AccountController;
