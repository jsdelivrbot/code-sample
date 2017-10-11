import getEmailsO from 'orchestration/get/getEmailsO'

import {
  EMAILS_URL,
} from 'constants/urlConstants'

const ORCHESTRATION_MAP = {
  post: {
  },
  put: {
  },
  get: {
    [EMAILS_URL]: getEmailsO,
  },
  patch: {},
  delete: {
  },
}

export default ORCHESTRATION_MAP
