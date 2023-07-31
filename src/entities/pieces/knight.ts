import { piecesIcons } from '@/templates/pieces';
import { PiecesRecord, Side, SvgElement, Piece } from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class Knight extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord['knight'];

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);
    this.icon = piecesIcons[side].knight;
  }

  capture() {}
  move() {}
}
