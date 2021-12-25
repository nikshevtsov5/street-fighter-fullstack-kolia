const getAllUsersMiddleware = (req, res, next) => {
  const data = res.data;
  if(!res.err && !data){
    res.err = {
      status: 404,
      message: 'Users are not found'
    }
  }
  next();
}

const getUserMiddleware = (req, res, next) => {
  const data = res.data;
  if(!res.err && !data){
    res.err = {
      status: 404,
      message: 'User with this ID is not found'
    }
  }
  next();
}

exports.getAllUsersMiddleware = getAllUsersMiddleware;
exports.getUserMiddleware = getUserMiddleware;
