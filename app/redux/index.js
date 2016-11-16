import { combineReducers } from 'redux'

import * as sampleRedux from './sampleRedux'

export const reducer = combineReducers({
  sample: sampleRedux.reducer,
})

export const sampleActionCreators = sampleRedux.actionCreators
