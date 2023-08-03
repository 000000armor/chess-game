import React from 'react';
import { observer } from 'mobx-react';
import { useGame } from '@/entities/game/game';
import { SquaresLayer } from '@components/squares-layer';
import { PiecesLayer } from '../pieces-layer';
import { PossibleMovesLayer } from '@components/possible-moves-layer';
import './board.styles.css';

export const Board = observer(() => {
  const game = useGame();

  const handleFlipBoard = () => {
    game.flipBoard();
  };

  return (
    <>
      <button onClick={handleFlipBoard}>Flip board</button>
      <div className='board-wrapper'>
        <SquaresLayer />
        <PiecesLayer />
        {game.isPossibleMovesVisible && <PossibleMovesLayer />}
      </div>
    </>
  );
});
