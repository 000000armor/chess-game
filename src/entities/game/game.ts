import { Knight } from '@entities/pieces';
import { GameInterface } from './game.interface';
import { PieceInstance } from '@/utils/types';
import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';

export class Game implements GameInterface {
  pieces: PieceInstance[] = [];

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
  selectPiece() {}
  showPossibleMoves() {}
}

export const game = new Game();
export const GameContext = createContext(game);
export const useGame = () => useContext(GameContext);
