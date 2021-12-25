const { fighter } = require('../models/fighter');
const {
  isWithoutIdField,
  isMinOneField,
  isOnlyModelsField,
  isNotEmpty
} = require('./helper-validation/helperValidation');
const { isAllFields } = require('./helper-validation/fighterHelperValidation');

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during creation
  if (req && req.body) {
    try {
      isWithoutIdField(req.body);
      isAllFields(req.body, fighter);
      isOnlyModelsField(req.body, fighter);
      isNotEmpty(req.body);
      next();
    } catch (err) {
      res.status(400).json({
        error: true,
        message: err.message
      })
    }
  } else {
    res.status(400).json({
      error: true,
      message: 'Bad request'
    })
  }
}

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for fighter entity during update
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

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
