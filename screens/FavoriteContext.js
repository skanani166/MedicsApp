// App.js
import React from 'react';
import { FavoriteProvider } from './FavoriteContext';
import MainComponent from './MainComponent';

const App = () => {
  return (
    <FavoriteProvider>
      <MainComponent />
    </FavoriteProvider>
  );
};

export default App;
