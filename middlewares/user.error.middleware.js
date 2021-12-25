//these middlewares i use if i have not error in route
// but if Boolean(data) == false i send error object to responseMiddleware

const errorMiddleware = (message) => (req, res, next) => {
  if(!res.err && !res.data){
    res.err = { status: 404, message: message };
    res.data = null
  }
  next();
}

exports.getAllUsersMiddleware = errorMiddleware('Users are not found');
exports.getUserMiddleware = errorMiddleware('User with this ID is not found');
exports.postNewUserMiddleware = errorMiddleware('User has been not created');
exports.putUserMiddleware = errorMiddleware('User has been not updated');
exports.deleteUserMiddleware = errorMiddleware('User has been not deleted');
