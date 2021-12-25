const { user } = require('../models/user');
const {
  isWithoutIdField,
  isMinOneField,
  isOnlyModelsField,
  isNotEmpty
} = require('./helper-validation/helperValidation');
const { isAllFields } = require('./helper-validation/userHelperValidation');

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during creation
  // if get error, stop middleware
  if ( req && req.body ) {
    try {
      isWithoutIdField(req.body);
      isAllFields(req.body, user);
      isOnlyModelsField(req.body, user);
      isNotEmpty(req.body);
      next();
    } catch (err) {
      res.status(400).json({ error: true, message: err.message })
    }
  } else {
    res.status(400).json({ error: true, message: 'Bad request' })
  }
}

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  // if get error, stop middleware
  if(req && req.body && req.params.id) {
    try {
      isMinOneField(req.body);
      isNotEmpty(req.body);
      next();
    } catch (err) {
      res.status(400).json({ error: true, message: err.message })
    }
  } else {
    res.status(400).json({ error: true, message: 'Bad request' })
  }
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
