import { piecesIcons } from '@/templates/pieces';
import { Piece, PiecesRecord, Side, SvgElement } from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class Bishop extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord.bishop;

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);

    this.icon = piecesIcons[side].bishop;
  }

  get possibleMoves(): number[][] {
    const { posX, posY } = this;
    const possibleMoves = [
      [posX + 1, posY + 1],
      [posX + 2, posY + 2],
      [posX + 3, posY + 3],
      [posX + 4, posY + 4],
      [posX + 5, posY + 5],
      [posX + 6, posY + 6],
      [posX + 7, posY + 7],
      [posX - 1, posY - 1],
      [posX - 2, posY - 2],
      [posX - 3, posY - 3],
      [posX - 4, posY - 4],
      [posX - 5, posY - 5],
      [posX - 6, posY - 6],
      [posX - 7, posY - 7],
      [posX + 1, posY - 1],
      [posX + 2, posY - 2],
      [posX + 3, posY - 3],
      [posX + 4, posY - 4],
      [posX + 5, posY - 5],
      [posX + 6, posY - 6],
      [posX + 7, posY - 7],
      [posX - 1, posY + 1],
      [posX - 2, posY + 2],
      [posX - 3, posY + 3],
      [posX - 4, posY + 4],
      [posX - 5, posY + 5],
      [posX - 6, posY + 6],
      [posX - 7, posY + 7],
    ];

    return possibleMoves.filter(([x, y]) => {
      return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    });
  }
}
