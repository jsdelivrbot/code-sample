import 'styleGuide/reset.scss'
import 'styleGuide/main.scss'
import './AppS.scss'
import React from 'react'
import { object } from 'prop-types'

const App = ({
  children = {},
}) => {
  return (
    <div className='App'>
      <header>Twine Email</header>

      <main>
        {children}
      </main>
    </div>
  )
}

App.propTypes = {
  children: object,
}

export default App
