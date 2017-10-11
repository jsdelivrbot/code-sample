import {
  TEST_INDEX_PATH,
  INDEX_PATH,
  EXAMPLES_INDEX_PATH,
} from 'constants/webpackConstants'

import {
  TESTING,
  EXAMPLES,
} from 'constants/envConstants'

const getIndexPath = ({ currentEnvironment }) => {
  switch (currentEnvironment) {
    case TESTING:
      return TEST_INDEX_PATH

    case EXAMPLES:
      return EXAMPLES_INDEX_PATH

    default:
      return INDEX_PATH
  }
}

export default getIndexPath
