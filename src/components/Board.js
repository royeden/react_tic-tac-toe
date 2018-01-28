import React, { Component } from 'react'
import Square from './Square'

let h
let ai

export default class extends Component {
  constructor() {
    super()

    this.state = {
      cells: emptyIndexes(Array(9).fill(null)),
      nextX: true
    }
  }

  componentWillReceiveProps(n) {
    h = n.chosen ? "X" : "O"
    ai = !n.chosen ? "X" : "O"
    if(n.mode < 2 && !n.start) {
      if(n.mode && !n.chosen)
      this.play(randMove())
      if(!n.mode && !n.chosen)
      this.play(4)
    }
  }

  reset() {
    this.setState({
      cells: Array(9).fill(null),
      nextX: true
    })
    this.props.reset()
  }


  play(v) {
    const state = this.state
    const mode = this.props.mode
    const cells = state.cells.slice()
    console.log(h);
    console.log(ai);

    if(win(cells) || isNaN(cells[v]))
    return

    cells[v] = state.nextX ? "X" : "O"

    if(mode === 2 ||
      (emptyIndexes(cells).length === 8 && !this.props.chosen)
    )
    return this.setState({
      cells: cells,
      nextX: !this.state.nextX,
    })

    if(win(cells) || tie(cells))
    return this.setState({
      cells: cells,
    })

    let move
    if(mode === 1) {
      move = randMove()
      while(isNaN(cells[move]))
      move = randMove()
      cells[move] = !state.nextX ? "X" : "O"
    }



    this.setState({
      cells: cells,
    })
  }



  render() {
    const board = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    const cells = this.state.cells
    return (
      <div className="board">
        <h1>Tic-Tac-Toe</h1>
        <h4>
          { `${win(cells) ? `Won: ${win(cells)/*win2(cells, h)*/}` :
          (tie(cells) ? "Tied" :
          (`Turn: ${this.state.nextX ? "X" : "O"}`)) }` /*HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/}
        </h4>
        <button
          className="reset-btn btn"
          onClick={ () => this.reset() }
        >
          Reset
        </button>
        { board.map(i => (
          <div
            className="row"
            key={ i }
          >
            {i.map(j => (
              <Square
                handleClick={ () => this.play(j) }
                value={ isNaN(cells[j]) ? cells[j] : "" }
                key={ j }
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
}

/* const win2 = (cells, player) => {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i]
    console.log(`${a} ${b} ${c}`);
    if (cells[a] === player && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a]
    }
  }
  return null
} */

const win = (cells) => {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i]
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a]
    }
  }
  return null
}

const tie = (cells) => {
  for(let i = 0; i < cells.length; i++)
  if(!isNaN(cells[i]))
  return false

  return true
}

const randMove = () => Math.floor((Math.random() * 9))

const emptyIndexes = (cells) => cells.map((v, i) => v ? v : i).filter(s => !isNaN(s))

const minimax = (newBoard, player) => {
  const available = emptyIndexes(newBoard)

  if(available.length === 0)
  return 0


}

minimax(Array(9).fill(null))
