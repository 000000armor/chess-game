import { piecesIcons } from '@/templates/pieces';
import {
  Piece,
  PiecesRecord,
  Side,
  SidesRecord,
  SvgElement,
} from '@/utils/types';
import { Piece as PieceClass } from '@entities/piece/piece';

export class Pawn extends PieceClass {
  icon: SvgElement;
  name: Piece = PiecesRecord.pawn;

  constructor(side: Side, posX: number, posY: number) {
    super(side, posX, posY);

    this.icon = piecesIcons[side].pawn;
  }

  get possibleMoves(): number[][] {
    const { posX, posY } = this;
    const possibleMoves =
      this.side === SidesRecord.white
        ? [
            [posX, posY - 1],
            [posX, posY - 2],
          ]
        : [
            [posX, posY + 1],
            [posX, posY + 2],
          ];
    return possibleMoves.filter(([x, y]) => {
      return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    });
  }
}
