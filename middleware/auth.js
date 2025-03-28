function authenticationKey(req, res, next) {
  const api_key = req.header("x-api-key");

  if (api_key !== process.env.APIKEY) {
    res.status(403).json({ message: "You not allowed." });
  }
  next();
}

module.exports = authenticationKey;
