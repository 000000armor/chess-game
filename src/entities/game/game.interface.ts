import { PieceInstance } from '@/utils/types';

export interface GameInterface {
  pieces: PieceInstance[];
  selectedPiece: PieceInstance | null;
  startGame(): void;
  selectPiece: (piece: PieceInstance) => void;
}
