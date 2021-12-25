//these middlewares i use if i have got result from db without errors
// but if Boolean(data) == false i send error object to responseMiddleware

const getAllUsersMiddleware = (req, res, next) => {
  const data = res.data;
  if(!res.err && !data){
    res.err = { status: 404, message: 'Users are not found' };
    res.data = null
  }
  next();
}

const getUserMiddleware = (req, res, next) => {
  const data = res.data;
  if(!res.err && !data){
    res.err = { status: 404,  message: 'User with this ID is not found' };
    res.data = null;
  }
  next();
}

exports.getAllUsersMiddleware = getAllUsersMiddleware;
exports.getUserMiddleware = getUserMiddleware;
