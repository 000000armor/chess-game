import React from 'react';
import { piecesIcons } from '../../../templates/pieces';
import { Square } from '../../../types/general';
import { isSquareBlack } from '../../../utils/is-square-black';
import { IconWrapper } from '../../icon-wrapper';
import { squaresTemplate } from './templates';
import './squares.styles.css';

interface SquaresProps {
  isBoardFlipped: boolean;
}

export const Squares = ({ isBoardFlipped }: SquaresProps) => {
  const squaresTemplatePrepared = isBoardFlipped
    ? [...squaresTemplate.reverse()].map((row: Square[]) => [...row.reverse()])
    : squaresTemplate;

  return (
    <div className='squares-wrapper'>
      {squaresTemplatePrepared.map((row, rank: number) =>
        row.map((square: Square, file) => {
          const isBlack = isSquareBlack({ rank, file });
          const icon = square && piecesIcons[square[0]][square[1]];

          return (
            <div
              className={`square ${isBlack ? 'black' : 'white'}`}
              key={Math.random()}
            >
              {square && <IconWrapper icon={icon!} />}
            </div>
          );
        }),
      )}
    </div>
  );
};
