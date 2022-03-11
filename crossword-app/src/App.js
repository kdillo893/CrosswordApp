import './App.css';
import React from 'react';

function App() {
  return (
    <div className="CrosswordApp">
      <Game />
    </div>
  );
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} onKeyDown={props.onKeyDown}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i, j) {
    return (
      <Square
        key={i+","+j}
        value={this.props.squares[i][j]}
        onClick={() => this.props.onClick(i,j)}
        onKeyDown={(e) => this.props.onKeyDown(e, i, j)}
      />
    );
  }

  render() {
    const boardrenders = [];

    for (let i = 0; i < 15; i++) {
      const rowsquares = [];
      for (let j = 0; j < 15; j++) {
        rowsquares.push(this.renderSquare(i,j))
      }
      boardrenders.push(<div key={i} className="board-row">{rowsquares}</div>);
    }

    return (
      <div>
        {boardrenders}
      </div>
    );
  }
}

class WordClues extends React.Component {

  //TODO: don't know how to handle this...

  render(){
    return (
      <div className='clues'>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(15).fill(Array(15).fill(null)),
      solution: "",
      stepNumber: 0,
      xIsNext: true
    };
  }

  /**
   * handle key press given a square selected; if none, do nothing.
   * 
   * tab would move to the next word. this is to be determined
   * letters would insert and move to the next square depending on direction
   * space would leave the location blank and move to the next square
   * enter would flip the direction to traverse (from horizontal/vertical to other)
   * @param {char} e Key value pressed; to determine which square focus and value
   * @param {int} i row location of square
   * @param {int} j column location of square
   */
  handleKeyDown(e,i,j) {
    //make sure we're looking at a square; if not, then go out...
    if (!i || !j) {
      return;
    }

    //square location is i,j; determine based on 

    
  }

  /**
   * click a given square and set focus.
   * @param {int} i row location of square being selected
   * @param {int} j column location of sqare being selected
   * @returns 
   */
  focus(i,j) {
    //TODO
    
    return;
  }

  /**
   * When the hint is clicked, moves to the first square.
   * @param {} i 
   * @param {*} j 
   */
  jumpTo(hint) {

  }

  render() {
    const squares = this.state.squares;

    let crossword_title;


    return (
      <div className="game">
        <div className='game-info'>
          <div>{crossword_title}</div>
        </div>
        <div className="game-board">
          <Board
            squares={squares}
            onClick={(i,j) => this.focus(i,j)}
            onKeyDown={(e, i, j) => this.handleKeyDown(e,i,j)}
          />
        </div>
        <div>
          <WordClues

          />
        </div>
      </div>
    );
  }
}

/**
 * Check if the puzzle has been solved.
 * need to check solution against current squares
 * @param {*} squares 
 * @returns 
 */
function checkPuzzle(squares) {
  //determine method for "did you win" with crossword...
  // the solution exists in the file, bring it here.

  return null;
}

/**
 * Convert a string of characters and blanks into an array that
 *  would match the format of solving object
 * @param {String} solutionString Contains the raw data for solution,
 *  which is just a string of characters
 */
function constructSolution(solutionString) {

  const solutionOneD = Array.from(solutionString);
  const solution = Array(15);

  for (let i = 0; i < 15; i++) {
    let rowroot = 15 * i;
    let currentRow = solutionOneD.slice(rowroot, rowroot + 15);
    solution[i] = currentRow;
  }

  return solution;
}

export default App;