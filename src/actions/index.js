import fetch from 'cross-fetch'

const API = 'https://httpbin.org/uuid'

// action types

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'
export const FETCHING_DATA = 'FETCHING_DATA'
export const RECEIVED_DATA = 'RECEIVED_DATA'

// action creators

const fetchingData = isFetching => ({
  type: FETCHING_DATA,
  isFetching,
})

const receivedData = json => ({
  type: RECEIVED_DATA,
  json,
})

export const fetchData = () => (dispatch) => {
  dispatch(fetchingData(true))

  return fetch(API)
    .then(r => r.json().then(data => ({ status: r.status, json: data })))
    .then((obj) => {
      if (obj.status === 200) {
        dispatch(receivedData(obj.json))
        dispatch(fetchingData(false))
      } else {
        dispatch({
          type: FETCH_DATA_ERROR,
        })
      }
    })
    .catch(() => (
      dispatch({
        type: FETCH_DATA_ERROR,
      })
    ))
}
