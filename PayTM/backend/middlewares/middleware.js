const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token){
    return res.status(402).json({msg: "token doesn't exist"});
  }
  const word = token.split(" ");
  const jwtToken = word[1];
  
  try {
    const decodedJwt = jwt.verify(jwtToken, JWT_SECRET);
    if(!decodedJwt){
      return res.status(403).json({msg: "invalid token"});
    }

    req.userId = decodedJwt.userId    
    next();
  } catch (error) {
    res.status(401).json({msg: "input the right credentials"});
  }
}

module.exports = {
  authMiddleware
}