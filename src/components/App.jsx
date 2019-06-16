import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container, Row, Col, Progress,
} from 'reactstrap'
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
    <Container className="App">
      <Row className="App-header">
        <Col>
          { uuid
            ? <UUID uuid={uuid} />
            : <Progress animated value={50} />
          }
        </Col>
      </Row>
    </Container>
  )
}

export default App
