import { useGame } from '@/entities/game/game';
import { observer } from 'mobx-react';
import React, { PropsWithChildren, useEffect } from 'react';

interface InitializerContainerProps {}

export const InitializerContainer = ({
  children,
}: PropsWithChildren<InitializerContainerProps>) => {
  const game = useGame();

  useEffect(() => {
    game.startGame();
  }, []);

  return <>{children}</>;
};
