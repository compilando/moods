var Validator = require('validator').Validator;

Validator.prototype.error = function (msg) {
	console.error('Validation error: ' + msg);
	this._errors.push(msg);
  	return this;
}

Validator.prototype.getErrors = function () {
  return this._errors;
}

exports.make = function() {
  return new Validator();
};