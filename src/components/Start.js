import React, { Component } from 'react'
export default class extends Component {
  handleClick(v) {
    this.props.handleChoice(v)
  }

  handleChange(v) {
    this.props.handleChange(v.target.value)
  }

  handleConfirm() {
    this.props.chosen === null && this.props.mode !== 0 ?
    alert("Please choose!") :
    this.props.handleConfirm()
  }

  render() {
    const mode = this.props.mode
    return (
      <div className="overlay">
        <div className="start">
          <p className="start-title">Choose your side!</p>
          <div className="choose">
            <button
              onClick={ () => this.handleClick(true) }
              className={` start-btn ${mode === 0 ? "appear" : "hide"}-quick`}
            >
              X
            </button>
            <button
              onClick={ () => this.handleClick(false) }
              className={` start-btn ${mode === 0 ? "appear" : "hide"}-quick`}
            >
              O
            </button>
          </div>
          <select
            className="type"
            onChange={ (v) => this.handleChange(v) }
          >
            <option
              value="0"
              className="opt"
            >1 vs 1</option>
            <option
              value="1"
              className="opt"
            >Machine (Random)</option>
            <option
              value="2"
              className="opt"
            >Machine (Impossible)</option>
          </select>
          <button
            className="confirm-btn"
            onClick={ () => this.handleConfirm() }
          >Confirm</button>
        </div>
      </div>
    )
  }
}
