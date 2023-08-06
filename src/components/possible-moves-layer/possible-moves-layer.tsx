import React from 'react';
import { useGame } from '@/entities/game/game';
import { observer } from 'mobx-react';
import './possible-moves-layer.styles.css';

export const PossibleMovesLayer = observer(() => {
  const game = useGame();
  // TODO calculate possible moves in game class and return calculated array

  return (
    <div className={`possible-moves-layer ${game.isFlipped ? 'rotate' : ''}`}>
      {game.selectedPiece?.possibleMoves.map(possibleMove => (
        <div
          className='possible-move'
          style={{
            top: 75 * possibleMove[1],
            left: 75 * possibleMove[0],
          }}
          key={`${possibleMove[1]}-${possibleMove[0]}`}
        />
      ))}
    </div>
  );
});
