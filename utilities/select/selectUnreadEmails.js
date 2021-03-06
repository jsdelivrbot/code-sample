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

  const unreadEmails = filterItems({ items, filters })
  const sortedUnreadEmails = sortBy(unreadEmails, ['date'])
  const reversedUnreadEmails = reverse(sortedUnreadEmails)

  const unreadEmailIds = reversedUnreadEmails.map(({ data }) => {
    const [id] = getMany(data, ['id'])

    return id
  })

  return unreadEmailIds
}

const selectUnreadEmails = createSelector([getStates], transformer)

export default selectUnreadEmails
