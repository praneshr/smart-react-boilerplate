import { actions } from '../actions/'
import axios from 'axios'

const noop = () => {}

export const sampleApi = (callback = noop) => dispatch =>
  axios('http://google.com')
  .then((res) => {
    callback(res)
  })
  .catch((err) => {
    console.log(err)
  })
