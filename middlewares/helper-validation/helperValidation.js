
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


const isLengthEqual = (body) => {

}

const isAllFields = (body) => {
  // only id is not require
}

exports.isWithoutIdField = isWithoutIdField;
exports.isMinOneField = isMinOneField;
