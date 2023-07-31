import React from 'react';
import './board.styles.css';
import { useGame } from '@/entities/game/game';
import { IconWrapper } from '@components/icon-wrapper';
import { Observer } from 'mobx-react';
import { PieceInstance } from '@/utils/types';
import { SquaresLayer } from '@components/squares-layer';
import { PiecesLayer } from '../pieces-layer';

export const Board = () => {
  return (
    <div className='board-wrapper'>
      <SquaresLayer />
      <PiecesLayer />
    </div>
  );
};
