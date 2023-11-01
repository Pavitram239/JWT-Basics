const JWT = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { UnauthorizedApiError, UnauthenticatedApiError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedApiError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.iat, name: decoded.username };
    next();
  } catch (error) {
    throw new UnauthorizedApiError("Not authorized to access this route", 401);
  }
};

module.exports = authenticationMiddleware;
