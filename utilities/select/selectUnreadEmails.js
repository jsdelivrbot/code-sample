import { createSelector } from 'reselect'
import filterItems from 'utilities/filterItems'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import getMany from 'utilities/get/getMany'

const getStates = (state) => {
  const [
    items,
  ] = getMany(state, [
    'emailsR.items',
  ])

  return {
    items,
  }
}

const transformer = ({
  items,
}) => {
  const filters = {
    unread: true,
  }

  const unreadEmailIds = filterItems({ items, filters })
  const sortedUnreadEmails = sortBy(unreadEmailIds, ['date'])
  const reversedUnreadEmails = reverse(sortedUnreadEmails)

  const unreadEmailIdIds = reversedUnreadEmails.map(({ data }) => {
    const [id] = getMany(data, ['id'])

    return id
  })

  return unreadEmailIdIds
}

const selectUnreadEmails = createSelector([getStates], transformer)

export default selectUnreadEmails
