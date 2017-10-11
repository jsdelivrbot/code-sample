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
    unread: false,
  }

  const unreadEmails = filterItems({ items, filters })
  const sortedReadEmails = sortBy(unreadEmails, ['date'])
  const reversedReadEmails = reverse(sortedReadEmails)

  const unreadEmailIds = reversedReadEmails.map(({ data }) => {
    const [id] = getMany(data, ['id'])

    return id
  })

  return unreadEmailIds
}

const selectReadEmails = createSelector([getStates], transformer)

export default selectReadEmails
