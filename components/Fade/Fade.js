import './FadeS.scss'
import CSSTransition from 'react-transition-group/CSSTransition'
import React from 'react'

const timeout = { enter: 0, exit: 300 }

const Fade = (props) => {
  return (
    <CSSTransition
      {...props}
      classNames='Fade'
      timeout={timeout}
    />
  )
}

Fade.propTypes = {
}

export default Fade
