function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, key, value)
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign()
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value

  return Object.assign({});
}
