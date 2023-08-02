import { Side } from '@/utils/types';

export interface PieceInterface {
  side: Side;
  posX: number;
  posY: number;
  isCaptured: boolean;
  move(): void;
  showPossibleMoves(): void;
}
