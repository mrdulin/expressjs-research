const { verify } = require('@mycompany/verifylib');

const auditEvent = () => {
  verify();
};

module.exports = { auditEvent };
