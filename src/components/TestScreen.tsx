import React, { useState } from 'react';

interface TestScreenProps {
  onStop: () => void;
  startTest: () => void;
}

const TestScreen: React.FC<TestScreenProps> = ({ onStop, startTest }) => {
  const [showTip, setShowTip] = useState(true);
  const [testStarted, setTestStarted] = useState(false);

  // Create an array of 60 markers to represent seconds
  const clockMarkers = Array.from({ length: 60 }, (_, i) => {
    // For main hour markers (0, 15, 30, 45 which correspond to 12, 3, 6, 9 positions)
    const isMainHour = i % 15 === 0;
    // For regular hour markers (5, 10, 20, 25, etc.)
    const isHour = i % 5 === 0;

    return (
      <div
        key={`marker-${i}`}
        className={`time-marker ${isMainHour ? 'bg-white/70' : isHour ? 'bg-white/50' : 'bg-white/30'}`}
        style={{
          transform: `rotate(${i * 6}deg) translateY(-150px)`,
          height: isMainHour ? '18px' : isHour ? '14px' : '8px'
        }}
      />
    );
  });

  // Handle start button click
  const handleStart = () => {
    setTestStarted(true);
    startTest(); // Start the time tracking
    // Hide tip after 1.5 seconds
    setTimeout(() => {
      setShowTip(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Instruction text - only show before test has started */}
      {!testStarted && (
        <p className="text-gray-500 text-sm mono tracking-widest mb-4">
          STOP AT 10 SECONDS
        </p>
      )}

      {/* Minimal clock visualization */}
      <div className="relative w-80 h-80 mb-12">
        <div className="absolute inset-0 rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
          {clockMarkers}

          {/* Center point */}
          <div className="absolute w-3 h-3 rounded-full bg-white z-10"></div>

          {/* Second hand - only show before test starts */}
          {!testStarted && (
            <div
              className="absolute w-0.5 bg-white/80 animate-rotate"
              style={{
                height: '150px',
                bottom: '50%',
                left: '50%',
                transformOrigin: 'bottom center',
                zIndex: 5
              }}
            ></div>
          )}
        </div>
      </div>

      {testStarted && showTip && (
        <div className="absolute text-white/50 text-sm animate-fade-out mono tracking-wide">
          Feel the time passing...
        </div>
      )}

      <button
        onClick={testStarted ? onStop : handleStart}
        className="bg-white text-black font-mono text-xl py-4 px-12 rounded-full hover:bg-white/90 transition-colors"
      >
        {testStarted ? 'STOP' : 'START'}
      </button>
    </div>
  );
};

export default TestScreen;
