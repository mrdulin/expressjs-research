exports.authorizeStrategy = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }
  return (req, res, next) => {
    if (roles.length && !roles.includes(req.USER.role)) {
      return res.status(403).json({ message: 'Unauthorized' });
    } else {
      next();
    }
  };
};
