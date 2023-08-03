import React from 'react';
import { Observer, observer } from 'mobx-react';
import { IconWrapper } from '@components/icon-wrapper';
import { useGame } from '@/entities/game/game';
import { PieceInstance } from '@/utils/types';
import './pieces-layer.styles.css';

export const PiecesLayer = observer(() => {
  const game = useGame();

  const handlePieceClick = (piece: PieceInstance) => () => {
    game.selectPiece(piece);
  };

  return (
    <Observer>
      {() => (
        <div className={`pieces-layer ${game.isFlipped ? 'rotate' : ''}`}>
          {game.pieces.map(piece => (
            <div
              key={`${piece.posX}-${piece.posY}`}
              className={`piece ${piece.side} ${
                piece.isSelected ? 'selected' : ''
              } ${game.isFlipped ? 'rotate' : ''}`}
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
});
