import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
  state = { board: [], currentx: 0, currenty: 0 };
  movement = (i, j) => {
    document.getElementById(i.toString() + j.toString()).style.backgroundColor =
      "red";
  };
  componentDidMount = () => {
    var board = [];
    for (var i = 0; i < 10; i++) {
      var row = [];
      for (var j = 0; j < 6; j++) {
        row.push(
          <div className="col-2" id={i.toString() + j.toString()}>
            {"."}
          </div>
        );
      }
      board.push(row);
    }
    this.setState({ board: board });
    // console.log(this.state.board);
  };

  render() {
    const rowclick = () => {
      if (this.state.currentx >= this.state.board.length) {
        this.setState({ currenty: this.state.currenty + 1, currentx: 0 });
      }
      this.movement(this.state.currentx, this.state.currenty);
      this.setState({ currentx: this.state.currentx + 1 });
    };
    return (
      <div id="Board_Root">
        <div className="row" onClick={rowclick}>
          {console.log(this.state.board)}
          {this.state.board}
        </div>
      </div>
    );
  }
}

export default Board;
