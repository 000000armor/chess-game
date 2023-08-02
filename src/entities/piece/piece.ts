import { Side } from '@/utils/types';
import { PieceInterface } from './piece.interface';

export abstract class Piece implements PieceInterface {
  side: Side;
  posX: number;
  posY: number;
  isCaptured: boolean = false;
  isSelected: boolean = false;

  constructor(side: Side, posX: number, posY: number) {
    this.side = side;
    this.posX = posX;
    this.posY = posY;
  }

  private capture() {}

  select() {
    this.isSelected = true;
  }

  deselect() {
    this.isSelected = false;
  }

  move() {}
  showPossibleMoves() {}
}
