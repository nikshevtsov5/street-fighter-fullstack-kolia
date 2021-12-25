const isWithoutIdField = (body) => {
  if(body.hasOwnProperty('id')){
    throw new Error('Id field is automatically generated, please do not entry manually')
  } else {
    return true;
  }
}

const isMinOneField = (body) => {
  const bodyLength = Object.keys(body).length;
  if(bodyLength < 1){
    throw new Error('At least one field is required')
  } else {
    return true;
  }
}

const isOnlyModelsField = (body, model) => {
  Object.keys(body).forEach(item => {
    if(model.hasOwnProperty(item)) {
      return true;
    } else {
      throw new Error(`Field ${item} is not allowed`)
    }
  })
}

const isNotEmpty = (body) => {
  Object.keys(body).forEach(item => {
    if(body[item]){
      return true;
    } else {
      throw new Error(`Field ${item} can not be empty`)
    }
  });
}



exports.isWithoutIdField = isWithoutIdField;
exports.isMinOneField = isMinOneField;
exports.isOnlyModelsField = isOnlyModelsField;
exports.isNotEmpty = isNotEmpty;
