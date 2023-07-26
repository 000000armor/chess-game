import React from 'react';
import { RowKey } from '../../typings/meta';
import { board } from './templates';
import './chessboard.styles.css';

export const Chessboard = () => {
  const squares: string[] = Object.keys(board).reduce(
    (acc: string[], rowKey) => [...acc, ...board[rowKey as RowKey]],
    [],
  );

  return (
    <div className='chessboard'>
      {squares.map((square, index) => (
        <div className='square' key={index}>
          {square}
        </div>
      ))}
    </div>
  );
};
