import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { MainContent } from './components/layout/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <MainContent />
    </div>
  );
}

export default App;