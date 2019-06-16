import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../actions'
import UUID from './UUID'
import './App.css'

function App() {
  const { data: { uuid } } = useSelector(
    state => ({ data: state.data }),
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <UUID uuid={uuid} />
      </header>
    </div>
  )
}

export default App
