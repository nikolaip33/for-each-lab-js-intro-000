function iterativeLog(array) {
  array.forEach(function(element, index, array) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var test = [1,2,3,4,5]
  test.forEach(callback)
  return test
}

function doToArray(array, callback) {
  array.forEach(callback)
}
