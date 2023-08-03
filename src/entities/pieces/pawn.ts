import { piecesIcons } from '@/templates/pieces';
import { Piece, PiecesRecord, Side, SvgElement } from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class Pawn extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord.pawn;

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);

    this.icon = piecesIcons[side].pawn;
  }
}
