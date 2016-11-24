import actionTypes from './_action-types'
import { createAction } from 'redux-actions'

const sample = createAction(actionTypes.SAMPLE)

export default {
  sample,
}
