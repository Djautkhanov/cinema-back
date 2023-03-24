const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ error: "нет доступа" });
  }

  const [type, token] = authorization.split(" ");

  if (type === !"Bearer") {
    return res.json({ error: "не верный токен" });
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    return res.json("dskmsdklfmsd");  
  }
};

