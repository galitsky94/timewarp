import React, { useState } from 'react';
import Welcome from './components/Welcome';
import TestScreen from './components/TestScreen';
import Results from './components/Results';
import Footer from './components/Footer';
import { useTimeWarp } from './hooks/useTimeWarp';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'test' | 'results'>('welcome');
  const { isRunning, result, startTest, stopTest, resetTest } = useTimeWarp();

  const handleStartTest = () => {
    startTest();
    setCurrentScreen('test');
  };

  const handleStopTest = () => {
    stopTest();
    setCurrentScreen('results');
  };

  const handleTryAgain = () => {
    resetTest();
    setCurrentScreen('welcome');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-1">
        {currentScreen === 'welcome' && (
          <Welcome onStart={handleStartTest} />
        )}

        {currentScreen === 'test' && (
          <TestScreen onStop={handleStopTest} />
        )}

        {currentScreen === 'results' && result && (
          <Results result={result} onTryAgain={handleTryAgain} />
        )}
      </main>

      {currentScreen !== 'test' && <Footer />}
    </div>
  );
};

export default App;
