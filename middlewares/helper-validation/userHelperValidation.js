const isAllFields = (body, model) => {
  // only id is not require
  const { id, ...requiredFields } = model;
  Object.keys(requiredFields).forEach(item => {
    if(body.hasOwnProperty(item)) {
      return true;
    } else {
      throw new Error(`Field ${item} is required`)
    }
  });
}

exports.isAllFields = isAllFields;
