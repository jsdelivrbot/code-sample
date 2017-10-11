const getDevTool = ({ test, build }) => {
  if (test) {
    return 'inline-source-map'
  } else if (build) {
    return 'source-map'
  } else {
    return 'eval'
  }
}

export default getDevTool
