import 'styleGuide/reset.scss'
import 'styleGuide/main.scss'
import './AppS.scss'
import React from 'react'
import { object, bool } from 'prop-types'
import Loader from 'components/Loader/Loader'
import UnreadEmailsC from 'components/UnreadEmails/UnreadEmailsC'
import ReadEmailsC from 'components/ReadEmails/ReadEmailsC'

const App = ({
  children = {},
  showLoader = false,
}) => {
  return (
    <div className='App'>
      <header>--</header>

      { showLoader &&
        <Loader />
      }

      { !showLoader &&
        <main>
          <UnreadEmailsC />

          <ReadEmailsC />
        </main>
      }
    </div>
  )
}

App.propTypes = {
  children: object,
  showLoader: bool,
}

export default App
