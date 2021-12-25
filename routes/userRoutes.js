const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { getAllUsersMiddleware,
  getUserMiddleware } = require('../middlewares/user.error.middleware');

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
    const id = req.param.id;
    const user = UserService.search(id);
    res.data = user;
  } catch (err) {
    console.log('catched error', err);
    res.err = err
  } finally {
    next();
  }
}, getUserMiddleware, responseMiddleware);

// router.post('/', (req, res, next) => {
//   try {
//     const data = req.body;
//     const newUser = UserService.create(data);
//   } catch (err) {
//     res.err = err;
//   } finally {
//     next();
//   }
// })

module.exports = router;
