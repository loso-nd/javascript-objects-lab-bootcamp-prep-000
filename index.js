function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, key, value)
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign()
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value

  return obj
}
