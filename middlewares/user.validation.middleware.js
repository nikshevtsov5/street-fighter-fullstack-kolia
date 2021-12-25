const { user } = require('../models/user');
const {
  isWithoutIdField,
  isMinOneField } = require('./helper-validation/helperValidation');

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during creation
  // if get error, stop middleware
  if ( req && req.body ) {
    try {
      isWithoutIdField(req.body);
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
  console.log('in updateUserValid');
  if(req && req.body && req.params.id) {
    console.log('in if');
    try {
      console.log('in try');
      isMinOneField(req.body);
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
