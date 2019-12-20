import React from 'react';
import './App.css';
import styled from 'styled-components'
import {  playText, resultText, timeRem } from './returnText'

const Wrapper = styled.div`
.result {
  font-weight: bold;
}
.time {

}`

class App extends React.Component {
  state = {
    plays : [
      {
          playType: "run",
          gainLoss: "gain",
          playDist: "10",
          player1: "Gater",
          player2: "",
          result: "2nd",
          min: "10",
          sec: "7",
          quarter: "4th"
      }
  ]
  }

  render(){

  return (
    <Wrapper className="App">
      
  <span className='result'>{resultText()}</span>{ playText() }<span className='time'>{timeRem()}</span>


    </Wrapper>
  )
}
}

export default App;
