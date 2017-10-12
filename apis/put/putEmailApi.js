import { EMAILS_ID_URL } from 'constants/urlConstants'
import putGenericApi from './putGenericApi'

const putSuggestionAPI = putGenericApi({ idUrl: EMAILS_ID_URL })

export default putSuggestionAPI
