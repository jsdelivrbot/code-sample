import './WidthTransitionS.scss'
import CSSTransition from 'react-transition-group/CSSTransition'
import React from 'react'

const timeout = { enter: 0, exit: 300 }

const WidthTransition = (props) => {
  return (
    <CSSTransition
      {...props}
      classNames='WidthTransition'
      timeout={timeout}
    />
  )
}

WidthTransition.propTypes = {
}

export default WidthTransition
