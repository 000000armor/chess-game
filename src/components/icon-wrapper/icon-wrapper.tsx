import React, { ReactElement } from 'react';
import { SvgElement } from '@/types/general';

export const IconWrapper = ({ icon }: { icon: SvgElement }): ReactElement => {
  const Icon = icon;

  return <Icon />;
};
