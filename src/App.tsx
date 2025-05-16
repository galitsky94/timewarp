import React, { useState } from 'react';
import Welcome from './components/Welcome';
import TestScreen from './components/TestScreen';
import Results from './components/Results';
import { useTimeWarp } from './hooks/useTimeWarp';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'test' | 'results'>('welcome');
  const { isRunning, result, startTest, stopTest, resetTest } = useTimeWarp();

  const handleStartTest = () => {
    // Only navigate to test screen, don't start timing yet
    resetTest();
    setCurrentScreen('test');
  };

  const handleStopTest = () => {
    // This gets called when the user clicks STOP after starting the test
    stopTest();
    setCurrentScreen('results');
  };

  const handleTryAgain = () => {
    resetTest();
    setCurrentScreen('test'); // Go back to test screen (not the welcome screen)
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden">
      <main className="flex-1 flex items-center justify-center">
        {currentScreen === 'welcome' && (
          <Welcome onStart={handleStartTest} />
        )}

        {currentScreen === 'test' && (
          <TestScreen onStop={handleStopTest} startTest={startTest} />
        )}

        {currentScreen === 'results' && result && (
          <Results result={result} onTryAgain={handleTryAgain} />
        )}
      </main>
    </div>
  );
};

export default App;
