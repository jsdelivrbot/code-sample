import merge from 'lodash/merge'
import idAsKeys from 'utilities/idAsKeys'
import getMany from 'utilities/get/getMany'
import omit from 'lodash/omit'
import { string, checkPropTypes } from 'prop-types'

function getItemsById ({ action }) {
  const { newValues } = action

  const items = newValues.map((newValue, i) => {
    const item = {
      data: newValue,
      isPutting: false,
    }

    return item
  })

  return idAsKeys({ items })
}

const propTypes = {
  getRequestAction: string,
  getSuccessAction: string,
  postRequestAction: string,
  postSuccessAction: string,
  putRequestAction: string,
  putSuccessAction: string,
  deleteRequestAction: string,
  deleteSuccessAction: string,
}

const genericReducer = function ({
  getRequestAction,
  getSuccessAction,
  postRequestAction,
  postSuccessAction,
  putRequestAction,
  putSuccessAction,
  deleteRequestAction,
  deleteSuccessAction,
}) {
  checkPropTypes(propTypes, arguments[0], 'prop', 'genericReducer')

  return (state, action) => {
    const [
      id,
    ] = getMany(action, [
      'values.id',
    ])

    const [
      items,
    ] = getMany(state, [
      'items',
    ])

    switch (action.type) {
      case getRequestAction:
        return merge({}, state, { isGetting: true })

      case putRequestAction:
        return merge({}, state, {
          items: {
            [id]: {
              isPutting: true,
            },
          },
        })

      case putSuccessAction:
        const putSuccessItemsById = getItemsById({ action })

        return merge({}, state, {
          items: putSuccessItemsById,
        }, {
          items: {
            [id]: {
              isPutting: false,
            },
          },
        })

      case postSuccessAction:
        const postSuccessItemsById = getItemsById({ action })

        return merge({}, state, {
          items: postSuccessItemsById,
        })

      case getSuccessAction:
        const getSuccessItemsById = getItemsById({ action })

        return merge({}, state, {
          isGetting: false,
          items: getSuccessItemsById,
        })

      case deleteRequestAction:
        return merge({}, state, {
          items: {
            [id]: {
              isDeleting: true,
            },
          },
        })

      case deleteSuccessAction:
        const omittedItems = omit(items, [id])
        const omittedState = omit(state, 'items')

        return merge({}, omittedState, {
          items: omittedItems,
        })

      default:
        return state || { items: null, isGetting: false }
    }
  }
}

export default genericReducer
