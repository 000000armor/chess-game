import { piecesIcons } from '@/templates/pieces';
import { PiecesRecord, Side, SvgElement, Piece } from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class Knight extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord.knight;

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);

    this.icon = piecesIcons[side].knight;
  }

  get possibleMoves(): number[][] {
    const { posX, posY } = this;
    const possibleMoves = [
      [posX + 2, posY + 1],
      [posX + 2, posY - 1],
      [posX - 2, posY + 1],
      [posX - 2, posY - 1],
      [posX + 1, posY + 2],
      [posX + 1, posY - 2],
      [posX - 1, posY + 2],
      [posX - 1, posY - 2],
    ];

    return possibleMoves.filter(([x, y]) => {
      return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    });
  }
}
