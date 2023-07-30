export const isSquareBlack = (square: { file: number; rank: number }) => {
  const { file, rank } = square;

  return (file + rank) % 2 !== 0;
};
