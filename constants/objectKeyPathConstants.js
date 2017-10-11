import { EXPIRATION } from 'constants/queryConstants'

export const PATHNAME = 'routing.locationBeforeTransitions.pathname'
export const QUERY_WHOLE = `routing.locationBeforeTransitions.query`
export const QUERY = ({ key }) => `routing.locationBeforeTransitions.query.${key}`
export const HASH = 'routing.locationBeforeTransitions.hash'
export const EXPIRATION_QUERY = QUERY + '.' + EXPIRATION
