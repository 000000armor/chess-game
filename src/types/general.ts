import { FunctionComponent, SVGProps } from 'react';

export const fileKeys = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
export const rankKeys = [1, 2, 3, 4, 5, 6, 7, 8];

export type FileKey = (typeof fileKeys)[number];
export type RankKey = (typeof rankKeys)[number];
export type Piece = 'rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'pawn';
export type Side = 'white' | 'black';

export type PieceKey = [Side, Piece];
export type Square = PieceKey | null;

export type Row = [
  Square,
  Square,
  Square,
  Square,
  Square,
  Square,
  Square,
  Square,
];

export type Squares = [Row, Row, Row, Row, Row, Row, Row, Row];

export type SvgElement = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export type PiecesRecord = Record<Piece, SvgElement>;
export type PiecesIcons = Record<'white' | 'black', PiecesRecord>;
