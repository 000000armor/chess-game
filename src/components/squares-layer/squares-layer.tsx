import React from 'react';
import './squares-layer.styles.css';

export const SquaresLayer = () => {
  const board: null[] = Array(64).fill(null);

  return (
    <div className='squares-layer'>
      {board.map((_, index) => (
        <div className='square' key={index} />
      ))}
    </div>
  );
};
