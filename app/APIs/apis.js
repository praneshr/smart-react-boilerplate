import { actions } from '../actions/'
import axios from 'axios'

const noop = () => {}

export const sampleApi = (callback = noop) => dispatch =>
  axios('http://google.com')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
