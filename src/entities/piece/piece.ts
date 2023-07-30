import { Side } from '@/utils/types';
import { PieceInterface } from './piece.interface';

export class Piece implements PieceInterface {
  side: Side;
  posX: number;
  posY: number;
  captured: boolean = false;

  constructor(side: Side, posX: number, posY: number) {
    this.side = side;
    this.posX = posX;
    this.posY = posY;
  }
}
