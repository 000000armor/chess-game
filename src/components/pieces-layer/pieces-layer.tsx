import React from 'react';
import { Observer, observer } from 'mobx-react';
import { IconWrapper } from '@components/icon-wrapper';
import { useGame } from '@/entities/game/game';
import { PieceInstance } from '@/utils/types';
import './pieces-layer.styles.css';

export const PiecesLayer = observer(() => {
  const game = useGame();

  const isPieceSelected = (
    selectedPiece: PieceInstance | null,
    piece: PieceInstance,
  ) => selectedPiece === piece && selectedPiece.isSelected;

  const handlePieceClick = (piece: PieceInstance) => () => {};

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
              {console.log(piece.isSelected)}
              <IconWrapper icon={piece.icon} />
            </div>
          ))}
        </div>
      )}
    </Observer>
  );
});
