import merge from 'lodash/merge'
import forIn from 'lodash/forIn'
import isObject from 'lodash/isObject'

// TODO: use destructor
function removeUndefined (o) {
  if (isObject(o) && !Array.isArray(o)) {
    let obj = merge({}, o)

    forIn(obj, function (val, key) {
      if (val === null || val === undefined) {
        delete obj[key]
      } else {
        obj[key] = removeUndefined(val)
      }
    })

    return obj
  }

  return o
}

export default removeUndefined
