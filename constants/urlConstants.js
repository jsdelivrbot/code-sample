import { API_PREFIX } from 'configs'

export const EMAILS_URL = API_PREFIX + '/twine-public/apis/twine-mail-get.json'
export const EMAILS_ID_URL = ({ id }) => API_PREFIX + `/twine-public/apis/twine-mail-get/${id}.json`
