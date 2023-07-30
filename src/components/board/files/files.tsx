import React from 'react';
import { FileKey, fileKeys } from '../../../types/general';
import './files.styles.css';

interface FilesProps {
  isBoardFlipped: boolean;
}

export const Files = ({ isBoardFlipped }: FilesProps) => {
  const filesPrepared = isBoardFlipped ? [...fileKeys.reverse()] : fileKeys;

  return (
    <div className='files-wrapper'>
      {filesPrepared.map((fileKey: FileKey, index: number) => (
        <div key={index}>{fileKey}</div>
      ))}
    </div>
  );
};
