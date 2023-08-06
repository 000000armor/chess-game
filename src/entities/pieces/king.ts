import { piecesIcons } from '@/templates/pieces';
import { PiecesRecord, Side, SvgElement, Piece } from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class King extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord.king;

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);

    this.icon = piecesIcons[side].king;
  }

  get possibleMoves(): number[][] {
    const { posX, posY } = this;
    const possibleMoves = [
      [posX, posY - 1],
      [posX, posY + 1],
      [posX - 1, posY],
      [posX + 1, posY],
      [posX - 1, posY - 1],
      [posX - 1, posY + 1],
      [posX + 1, posY + 1],
      [posX + 1, posY - 1],
    ];

    return possibleMoves.filter(([x, y]) => {
      return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    });
  }
}
