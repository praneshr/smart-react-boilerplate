import { handleActions } from 'redux-actions'

import actionTypes from '../actions/_action-types'
import { createState } from './utils'

const initialState = {
  sample: 'sample',
}

/*
createState is a utility function which helps to the combine new state and the
previous state.
See './utils/createState.js'
*/

const reducer = handleActions({
  [actionTypes.SAMPLE]: (state, { payload }) =>
    createState(state, payload, 'sample'),
}, initialState)

export default reducer
