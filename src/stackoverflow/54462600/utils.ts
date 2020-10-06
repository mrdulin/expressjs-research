function isSessionCookieValid(req, res, next) {
  if (!isValid(req.session)) {
    return res.status(401).json({
      isLoggedIn: false,
    });
  }
  return next();
}

function isValid(session) {
  return true;
}

export { isSessionCookieValid };
