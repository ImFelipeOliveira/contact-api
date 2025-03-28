function authenticationKey(req, res) {
  const api_key = req.header("x-api-key");

  if (api_key !== process.env.APIKEY) {
    res.status(403).json({ message: "You not allowed." });
  }
}

module.exports = authenticationKey;
