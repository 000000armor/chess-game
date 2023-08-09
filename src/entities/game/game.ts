import { makeAutoObservable } from 'mobx';
import { Bishop, King, Knight, Pawn, Queen, Rook } from '@entities/pieces';
import { GameInterface } from './game.interface';
import { PieceInstance, SidesRecord } from '@/utils/types';
import { createContext, useContext } from 'react';

export class Game implements GameInterface {
  pieces: PieceInstance[] = [];
  selectedPiece: PieceInstance | null = null;
  isPossibleMovesVisible: boolean = false;
  isFlipped: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  startGame() {
    this.pieces.push(
      new Pawn(SidesRecord.black, 0, 1),
      new Pawn(SidesRecord.black, 1, 1),
      new Pawn(SidesRecord.black, 2, 1),
      new Pawn(SidesRecord.black, 3, 1),
      new Pawn(SidesRecord.black, 4, 1),
      new Pawn(SidesRecord.black, 5, 1),
      new Pawn(SidesRecord.black, 6, 1),
      new Pawn(SidesRecord.black, 7, 1),
      new Knight(SidesRecord.black, 1, 0),
      new Knight(SidesRecord.black, 6, 0),
      new Pawn(SidesRecord.white, 0, 6),
      new Pawn(SidesRecord.white, 1, 6),
      new Pawn(SidesRecord.white, 2, 6),
      new Pawn(SidesRecord.white, 3, 6),
      new Pawn(SidesRecord.white, 4, 6),
      new Pawn(SidesRecord.white, 5, 6),
      new Pawn(SidesRecord.white, 6, 6),
      new Pawn(SidesRecord.white, 7, 6),
      new Knight(SidesRecord.white, 1, 7),
      new Knight(SidesRecord.white, 6, 7),
      new Rook(SidesRecord.white, 0, 7),
      new Rook(SidesRecord.white, 7, 7),
      new Rook(SidesRecord.black, 0, 0),
      new Rook(SidesRecord.black, 7, 0),
      new Bishop(SidesRecord.white, 2, 7),
      new Bishop(SidesRecord.white, 3, 3),
      new Bishop(SidesRecord.black, 2, 0),
      new Bishop(SidesRecord.black, 5, 0),
      new Queen(SidesRecord.white, 3, 7),
      new Queen(SidesRecord.black, 3, 0),
      new King(SidesRecord.white, 4, 7),
      new King(SidesRecord.black, 4, 0),
    );
  }

  selectPiece(piece: PieceInstance) {
    if (!this.selectedPiece) {
      this.selectedPiece = piece;
      this.selectedPiece.toggleSelection();
      this.isPossibleMovesVisible = true;
      return;
    }

    if (this.selectedPiece === piece) {
      this.selectedPiece.toggleSelection();
      this.selectedPiece = null;
      this.isPossibleMovesVisible = false;
      return;
    }

    this.selectedPiece.toggleSelection();
    this.selectedPiece = piece;
    this.selectedPiece.toggleSelection();
    this.isPossibleMovesVisible = true;
  }

  flipBoard() {
    this.isFlipped = !this.isFlipped;
  }

  get possibleMoves(): number[][] {
    const possibleMovesRaw = this.selectedPiece?.possibleMoves;
    if (!possibleMovesRaw) return [];

    return possibleMovesRaw;
  }
}

export const game = new Game();
export const GameContext = createContext(game);
export const useGame = () => useContext(GameContext);
