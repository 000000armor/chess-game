import React from 'react';
import './board.styles.css';
import { useGame } from '@/entities/game/game';
import { IconWrapper } from '../icon-wrapper';
import { Observer } from 'mobx-react';

export const Board = () => {
  const game = useGame();
  const board: null[] = Array(64).fill(null);
  console.log(game);
  return (
    <Observer>
      {() => (
        <div className='board-wrapper'>
          <div className='board-layer'>
            {board.map((_, index) => (
              <div className={`field `} />
            ))}
          </div>
          <div className='pieces-layer'>
            {game.pieces.map(piece => (
              <div
                key={`${piece.posX}-${piece.posY}`}
                className={`piece ${piece.side}`}
                style={{ top: 75 * piece.posY, left: 75 * piece.posX }}
              >
                <IconWrapper icon={piece.icon} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Observer>
  );
};
