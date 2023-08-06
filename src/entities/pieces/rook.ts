import { piecesIcons } from '@/templates/pieces';
import { PiecesRecord, Side, SvgElement, Piece } from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class Rook extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord.rook;

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);

    this.icon = piecesIcons[side].rook;
  }

  get possibleMoves(): number[][] {
    const { posX, posY } = this;
    const possibleMoves = [
      [posX, posY + 1],
      [posX, posY + 2],
      [posX, posY + 3],
      [posX, posY + 4],
      [posX, posY + 5],
      [posX, posY + 6],
      [posX, posY + 7],
      [posX, posY - 1],
      [posX, posY - 2],
      [posX, posY - 3],
      [posX, posY - 4],
      [posX, posY - 5],
      [posX, posY - 6],
      [posX, posY - 7],
      [posX + 1, posY],
      [posX + 2, posY],
      [posX + 3, posY],
      [posX + 4, posY],
      [posX + 5, posY],
      [posX + 6, posY],
      [posX + 7, posY],
      [posX - 1, posY],
      [posX - 2, posY],
      [posX - 3, posY],
      [posX - 4, posY],
      [posX - 5, posY],
      [posX - 6, posY],
      [posX - 7, posY],
    ];
    return possibleMoves.filter(([x, y]) => {
      return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    });
  }
}
