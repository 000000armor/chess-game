import { PieceInstance } from '@/utils/types';

export interface GameInterface {
  pieces: PieceInstance[];
  startGame(): void;
  isPossibleMovesVisible: boolean;
  isFlipped: boolean;
}
