import { Knight } from '@/entities/pieces';
import { FunctionComponent, SVGProps } from 'react';

export type Side = 'white' | 'black';

export type SvgElement = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;
type Piece = 'rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'pawn';

export type PieceInstance = Knight;

type PiecesRecord = Record<Piece, SvgElement>;

export type PiecesIcons = Record<Side, PiecesRecord>;
