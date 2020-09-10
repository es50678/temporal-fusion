import React from 'react';
import { Board } from '../board';

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>

        <div className="game-info">
          <div className="">
            {/* TODO */}
          </div>
          <ol>
            {/* TODO */}
          </ol>
        </div>
      </div>
    )
  }
}
