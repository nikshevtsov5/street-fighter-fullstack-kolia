const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');
const {
  getAllUsersMiddleware,
  getUserMiddleware,
  postNewUserMiddleware,
  putUserMiddleware,
  deleteUserMiddleware } = require('../middlewares/user.error.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.get('/', (req, res, next) => {
  try {
    const users = UserService.getAllUsers();
    res.data = users;
  } catch (err) {
    res.err = err
  } finally {
    next();
  }
}, getAllUsersMiddleware, responseMiddleware);

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const user = UserService.search({'id': id});
    res.data = user;
  } catch (err) {
    res.err = err
  } finally {
    next();
  }
}, getUserMiddleware, responseMiddleware);

router.post('/', createUserValid, (req, res, next) => {
  try {
    const data = req.body;
    const newUser = UserService.createNew(data);
    res.data = newUser;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, postNewUserMiddleware, responseMiddleware);

router.put('/:id', updateUserValid, (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updateDUser = UserService.updateOne(id, data);
    res.data = updateDUser;
  } catch (err) {
    res.err = err;
  } finally {
    next()
  }
}, putUserMiddleware, responseMiddleware);

router.delete('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedUser = UserService.deleteOne(id);
    res.data = deletedUser;
  } catch (err) {
    res.err = err;
  } finally {
    next()
  }
}, deleteUserMiddleware, responseMiddleware)

module.exports = router;



























//
