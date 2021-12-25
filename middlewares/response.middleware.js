const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  console.log('res.err =>', res.err);
  if(!res.err) {
    console.log('in responseMiddleware if block');
    const data = res.data;
    res.status(200).json(data)
  } else {
    console.log('in responseMiddleware else block');
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
