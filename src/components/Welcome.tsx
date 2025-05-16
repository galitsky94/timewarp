import React from 'react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  // Create clock markers for a minimal clock design
  const clockMarkers = Array.from({ length: 60 }, (_, i) => {
    // For main hour markers (0, 15, 30, 45 which correspond to 12, 3, 6, 9 positions)
    const isMainHour = i % 15 === 0;
    // For regular hour markers (5, 10, 20, 25, etc.)
    const isHour = i % 5 === 0;

    return (
      <div
        key={i}
        className={`time-marker ${isMainHour ? 'bg-white/70' : isHour ? 'bg-white/50' : 'bg-white/30'}`}
        style={{
          transform: `rotate(${i * 6}deg) translateY(-150px)`,
          height: isMainHour ? '18px' : isHour ? '14px' : '8px'
        }}
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center max-w-xl mx-auto">
      <div className="relative w-80 h-80 mb-8">
        <div className="absolute inset-0 rounded-full border border-white/20 flex items-center justify-center">
          {clockMarkers}
          <div className="absolute w-3 h-3 rounded-full bg-white z-10"></div>
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
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white mono tracking-tight">
        TIME WARP
      </h1>

      <p className="text-gray-400 mb-8 text-lg max-w-xs">
        Is your mind faster than time?
      </p>

      <button
        onClick={onStart}
        className="bg-white text-black text-lg font-mono px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
      >
        START
      </button>
    </div>
  );
};

export default Welcome;
