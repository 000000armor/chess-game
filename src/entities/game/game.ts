import { Knight } from '@entities/pieces';
import { GameInterface } from './game.interface';
import { PieceInstance, SidesRecord } from '@/utils/types';
import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';

export class Game implements GameInterface {
  pieces: PieceInstance[] = [];
  selectedPiece: PieceInstance | null = null;

  constructor() {
    makeAutoObservable(this);
    console.log('Game constructor');
  }

  startGame() {
    this.pieces.push(
      new Knight(SidesRecord.white, 1, 0),
      new Knight(SidesRecord.white, 6, 0),
      new Knight(SidesRecord.white, 1, 7),
      new Knight(SidesRecord.white, 6, 7),
    );
  }

  selectPiece(pieceToSelect: PieceInstance) {}

  showPossibleMoves() {}
}

export const game = new Game();
export const GameContext = createContext(game);
export const useGame = () => useContext(GameContext);
