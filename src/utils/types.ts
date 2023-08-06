import { Bishop, King, Knight, Pawn, Queen, Rook } from '@/entities/pieces';
import { FunctionComponent, SVGProps } from 'react';

export const PiecesRecord = {
  rook: 'rook',
  knight: 'knight',
  bishop: 'bishop',
  queen: 'queen',
  king: 'king',
  pawn: 'pawn',
} as const;

export const SidesRecord = {
  white: 'white',
  black: 'black',
} as const;

export type Side = (typeof SidesRecord)[keyof typeof SidesRecord];

export type SvgElement = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export type Piece = (typeof PiecesRecord)[keyof typeof PiecesRecord];

export type PieceInstance = Knight | Pawn | Queen | King | Rook | Bishop | Pawn;

type PiecesRecord = Record<Piece, SvgElement>;

export type PiecesIcons = Record<Side, PiecesRecord>;
