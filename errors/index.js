const CustomAPIError = require("./custom-error");
const BadRequestApiError = require("./bad-request");
const UnauthenticatedApiError = require("./unauthenticated");
const UnauthorizedApiError = require("./unauthorized");

module.exports = {
  CustomAPIError,
  BadRequestApiError,
  UnauthenticatedApiError,
  UnauthorizedApiError,
};
