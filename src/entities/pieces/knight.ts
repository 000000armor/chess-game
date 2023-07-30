import { piecesIcons } from '@/templates/pieces';
import { Side, SvgElement } from '@/utils/types';
import { Piece } from '@entities/piece/piece';

export class Knight extends Piece {
  icon: SvgElement;
  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);
    this.icon = piecesIcons[side].knight;
  }

  capture() {}
  move() {}
}
