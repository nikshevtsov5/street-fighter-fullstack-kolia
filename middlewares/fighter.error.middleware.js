//these middlewares i use if i have not error in route
// but if Boolean(data) == false i send error object to responseMiddleware

const errorMiddleware = (message) => (req, res, next) => {
  if(!res.err && !res.data){
    res.err = { status: 404, message: message };
    res.data = null
  }
  next();
}

exports.getAllFightersMiddleware = errorMiddleware('Fighters are not found');
exports.getFighterMiddleware = errorMiddleware('Fighter with this ID is not found');
exports.postNewFighterMiddleware = errorMiddleware('Fighter has been not created');
exports.putFighterMiddleware = errorMiddleware('Fighter has been not updated');
exports.deleteFighterMiddleware = errorMiddleware('Fighter has been not deleted');
