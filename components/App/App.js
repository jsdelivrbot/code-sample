import 'styleGuide/reset.scss'
import 'styleGuide/main.scss'
import './AppS.scss'
import React from 'react'
import { object, bool } from 'prop-types'
import Loader from 'components/Loader/Loader'
import UnreadEmailsC from 'components/UnreadEmails/UnreadEmailsC'

const App = ({
  children = {},
  showLoader = false,
}) => {
  return (
    <div className='App'>
      <header>Twine Email</header>

      { showLoader &&
        <Loader />
      }

      { !showLoader &&
        <main>
          <UnreadEmailsC />
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
