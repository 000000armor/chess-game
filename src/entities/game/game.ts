import { Knight } from '@entities/pieces';
import { GameInterface } from './game.interface';
import { PieceInstance } from '@/utils/types';
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
      new Knight('white', 1, 0),
      new Knight('white', 6, 0),
      new Knight('white', 1, 7),
      new Knight('white', 6, 7),
    );
  }

  selectPiece(piece: PieceInstance) {
    if (
      piece.side === this.selectedPiece?.side &&
      piece.name === this.selectedPiece?.name
    ) {
      this.selectedPiece = null;
      return;
    }

    this.selectedPiece = piece;
  }

  showPossibleMoves() {}
}

export const game = new Game();
export const GameContext = createContext(game);
export const useGame = () => useContext(GameContext);
