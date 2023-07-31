import React from 'react';

export const SquaresLayer = () => {
  const board: null[] = Array(64).fill(null);

  return (
    <div className='board-layer'>
      {board.map((_, index) => (
        <div className={`field `} key={index} />
      ))}
    </div>
  );
};
