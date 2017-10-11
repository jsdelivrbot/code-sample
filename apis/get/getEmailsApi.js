import { EMAILS_URL } from 'constants/urlConstants'
import getGenericApi from './getGenericApi'

const getEmailsApi = getGenericApi({ url: EMAILS_URL })

export default getEmailsApi
