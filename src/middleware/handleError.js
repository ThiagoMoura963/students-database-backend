import mongoose from "mongoose";
import BaseError from "../error/BaseError.js";
import BadRequest from "../error/BadRequest.js";
import ValidationError from "../error/ValidationError.js";
import NotFound from "../error/NotFound.js";

/* eslint-disable no-unused-vars */
function handleError(error, req, res, next) {
  if(error instanceof mongoose.Error.CastError) {
    new BadRequest().sendResponse(res);
  } else if(error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);
  } else if(error instanceof NotFound) {
    error.sendResponse(res);
  } else if(error instanceof BaseError) {
    new BaseError().sendResponse(res);
  }
}

export default handleError;