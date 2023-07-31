import { Knight } from '@/entities/pieces';
import { FunctionComponent, SVGProps } from 'react';

export type Side = 'white' | 'black';

export type SvgElement = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export const PiecesRecord = {
  rook: 'rook',
  knight: 'knight',
  bishop: 'bishop',
  queen: 'queen',
  king: 'king',
  pawn: 'pawn',
} as const;

export type Piece = (typeof PiecesRecord)[keyof typeof PiecesRecord];

export type PieceInstance = Knight;

type PiecesRecord = Record<Piece, SvgElement>;

export type PiecesIcons = Record<Side, PiecesRecord>;
