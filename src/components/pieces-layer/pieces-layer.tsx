import React from 'react';
import { Observer } from 'mobx-react';
import { IconWrapper } from '@components/icon-wrapper';
import { useGame } from '@/entities/game/game';
import { PieceInstance } from '@/utils/types';

export const PiecesLayer = () => {
  const game = useGame();

  const handlePieceClick = (piece: PieceInstance) => () => {
    game.selectPiece(piece);
  };

  return (
    <Observer>
      {() => (
        <div className='pieces-layer'>
          {game.pieces.map(piece => (
            <div
              key={`${piece.posX}-${piece.posY}`}
              className={`piece ${piece.side}`}
              style={{ top: 75 * piece.posY, left: 75 * piece.posX }}
              onClick={handlePieceClick(piece)}
            >
              <IconWrapper icon={piece.icon} />
            </div>
          ))}
        </div>
      )}
    </Observer>
  );
};
