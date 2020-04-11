export const getUserAuthenticated = (var1, var2, var3) => {
  return async (req, res, next) => {
    try {
      // some logic
      if (!req.get('token')) {
        throw new Error('token required');
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
