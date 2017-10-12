import './HeightTransitionS.scss'
import CSSTransition from 'react-transition-group/CSSTransition'
import React from 'react'

const timeout = { enter: 0, exit: 300 }

const HeightTransition = (props) => {
  return (
    <CSSTransition
      {...props}
      classNames='HeightTransition'
      timeout={timeout}
    />
  )
}

HeightTransition.propTypes = {
}

export default HeightTransition
