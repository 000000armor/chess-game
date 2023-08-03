import { Side } from '@/utils/types';
import { PieceInterface } from './piece.interface';
import { action, makeObservable, observable } from 'mobx';

export abstract class Piece implements PieceInterface {
  side: Side;
  posX: number;
  posY: number;
  isCaptured: boolean = false;
  isSelected: boolean = false;

  constructor(side: Side, posX: number, posY: number) {
    makeObservable(this, {
      side: observable,
      posX: observable,
      posY: observable,
      isCaptured: observable,
      isSelected: observable,
      move: action,
      showPossibleMoves: action,
    });
    this.side = side;
    this.posX = posX;
    this.posY = posY;
  }

  private capture() {}

  toggleSelection() {
    this.isSelected = !this.isSelected;
  }
  move() {}
  showPossibleMoves() {}
}
