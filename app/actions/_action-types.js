const actionTypes = [
  'SAMPLE',
]

export default actionTypes.reduce((obj, str)=> {
  obj[str] = str
  return obj
}, {})
