import React from 'react';
import { rankKeys } from '../../../types/general';
import './ranks.styles.css';

export const Ranks = () => (
  <div className='ranks-wrapper'>
    {rankKeys.map((rankKey, index: number) => (
      <div className='number' key={index}>
        {rankKey}
      </div>
    ))}
  </div>
);
