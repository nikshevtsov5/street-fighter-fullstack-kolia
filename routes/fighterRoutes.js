const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');
const {
  getAllFightersMiddleware,
  getFighterMiddleware,
  postNewFighterMiddleware,
  putFighterMiddleware,
  deleteFighterMiddleware } = require('../middlewares/fighter.error.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', (req, res, next) => {
  try {
    const fighters = FighterService.getAllFighters();
    res.data = fighters;
  } catch (err) {
    res.err = err
  } finally {
    next();
  }
}, getAllFightersMiddleware, responseMiddleware);

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const fighter = FighterService.search({'id': id});
    res.data = fighter;
  } catch (err) {
    res.err = err
  } finally {
    next();
  }
}, getFighterMiddleware, responseMiddleware);

router.post('/', createFighterValid, (req, res, next) => {
  try {
    const data = req.body;
    const newFighter = FighterService.createNew(data);
    res.data = newFighter;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, postNewFighterMiddleware, responseMiddleware);

router.put('/:id', updateFighterValid, (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updateDFighter = FighterService.updateOne(id, data);
    res.data = updateDFighter;
  } catch (err) {
    res.err = err;
  } finally {
    next()
  }
}, putFighterMiddleware, responseMiddleware);

router.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedFighter = FighterService.deleteOne(id);
    res.data = deletedFighter;
  } catch (err) {
    res.err = err;
  } finally {
    next()
  }
}, deleteFighterMiddleware, responseMiddleware)


module.exports = router;
