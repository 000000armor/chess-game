import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { InitializerContainer } from '@components/initializer-container';
import { GameContext, game } from '@entities/game/game';

ReactDOM.render(
  <React.StrictMode>
    <GameContext.Provider value={game}>
      <InitializerContainer>
        <App />
      </InitializerContainer>
    </GameContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
