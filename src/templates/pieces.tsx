import { ReactComponent as KingBlack } from '@assets/svg/bK.svg';
import { ReactComponent as KingWhite } from '@assets/svg/wK.svg';
import { ReactComponent as QueenBlack } from '@assets/svg/bQ.svg';
import { ReactComponent as QueenWhite } from '@assets/svg/wQ.svg';
import { ReactComponent as BishopBlack } from '@assets/svg/bB.svg';
import { ReactComponent as BishopWhite } from '@assets/svg/wB.svg';
import { ReactComponent as KnightBlack } from '@assets/svg/bN.svg';
import { ReactComponent as KnightWhite } from '@assets/svg/wN.svg';
import { ReactComponent as RookBlack } from '@assets/svg/bR.svg';
import { ReactComponent as RookWhite } from '@assets/svg/wR.svg';
import { ReactComponent as PawnBlack } from '@assets/svg/bP.svg';
import { ReactComponent as PawnWhite } from '@assets/svg/wP.svg';
import { PiecesIcons } from '@/utils/types';

export const piecesIcons: PiecesIcons = {
  white: {
    king: KingWhite,
    queen: QueenWhite,
    bishop: BishopWhite,
    knight: KnightWhite,
    rook: RookWhite,
    pawn: PawnWhite,
  },
  black: {
    king: KingBlack,
    queen: QueenBlack,
    bishop: BishopBlack,
    knight: KnightBlack,
    rook: RookBlack,
    pawn: PawnBlack,
  },
};
