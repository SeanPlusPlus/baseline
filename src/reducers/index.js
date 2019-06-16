import { combineReducers } from 'redux'

import {
  FETCHING_DATA,
  RECEIVED_DATA,
} from '../actions'

function data(state = { uuid: null, isFetching: null }, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case RECEIVED_DATA:
      return {
        ...state,
        uuid: action.json.uuid,
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  data,
})

export default reducers
