import React, { Component, Fragment } from 'react'
import Start from './components/Start'
import Choice from './components/Choice'
import Board from './components/Board'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      start: true,
      chosen: null,
      mode: 0
    }
  }

  handleChoice(v) {
    this.setState({
      chosen: v
    })
  }

  handleConfirm() {
    this.setState({
      start: false,
    })
  }

  handleChange(v) {
    this.setState({mode: parseInt(v)})
  }

  render() {
    return (
      <Fragment>
        { this.state.start ?
          (<Start
            handleChoice={ (v) => this.handleChoice(v) }
            handleChange={ (v) => this.handleChange(v) }
            handleConfirm={ () => this.handleConfirm() }
            chosen={ this.state.chosen }
            mode={ this.state.mode }
           />) :
           (<Choice chosen={ this.state.chosen }/>)
        }
        <Board
          chosen={ this.state.chosen }
        />
      </Fragment>
    )
  }
}

export default App;