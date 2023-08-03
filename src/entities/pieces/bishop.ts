import { piecesIcons } from '@/templates/pieces';
import { PiecesRecord, Side, SvgElement, Piece } from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class Bishop extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord.bishop;

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);

    this.icon = piecesIcons[side].bishop;
  }
}
