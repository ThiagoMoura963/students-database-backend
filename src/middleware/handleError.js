import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import BadRequest from "../errors/BadRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

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