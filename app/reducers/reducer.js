import actionTypes from '../actions/_action-types'
import { createState } from './utils'
import { handleActions } from 'redux-actions'

const initialState = {
  sample: 'rtsjdhfvjshdv',
}

const reducer = handleActions({
  [actionTypes.SAMPLE]: (state, { payload }) =>
    createState(state, payload, 'sample'),
}, initialState)

export default reducer
