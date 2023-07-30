import React, { useState } from 'react';
import { Squares } from './squares';
import { Files } from './files';
import { Ranks } from './ranks';
import './board.styles.css';

export const Board = () => {
  const [isBoardFlipped, setIsBoardFlipped] = useState<boolean>(false);

  return (
    <>
      <div>
        <button onClick={() => setIsBoardFlipped(prev => !prev)}>
          Flip board
        </button>
      </div>
      <div className='chessboard'>
        <Ranks />
        <div>
          <Squares isBoardFlipped={isBoardFlipped} />
          <Files isBoardFlipped={isBoardFlipped} />
        </div>
      </div>
    </>
  );
};
