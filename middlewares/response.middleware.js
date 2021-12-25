const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query

  // in res something must be true. It can be res.data OR res.err
  if(res.data) {
    res.status(200).json(res.data)
  } else {
    // if errors ocured in previous middleware take that
    const code = res.err.status || 400;
    const message = res.err.message || 'Something bad happened';

    res.status(code).json({
      error: true,
      message: message
    })
  }
  next();
}

exports.responseMiddleware = responseMiddleware;
