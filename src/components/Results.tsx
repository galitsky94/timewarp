import React from 'react';
import { TimeWarpResult } from '../hooks/useTimeWarp';

interface ResultsProps {
  result: TimeWarpResult;
  onTryAgain: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onTryAgain }) => {
  const { actualTime, accuracy, category } = result;
  const isEarly = accuracy < 0;

  // Format time to 1 decimal place
  const formattedTime = actualTime.toFixed(1);
  const formattedAccuracy = Math.abs(accuracy).toFixed(1);

  // Create a tweet text
  const tweetText = encodeURIComponent(
    `I'm a "${category.label}" with a time perception of ${formattedTime}s instead of 10s. Test your sense of time. #TimeWarp`
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <div className="mono text-xs tracking-widest text-gray-500 mb-2">YOUR RESULT</div>

      <div className="text-7xl font-mono font-bold text-white mb-1">
        {formattedTime}
        <span className="text-2xl">s</span>
      </div>

      <div className="mb-6 text-center">
        <p className="text-gray-400 text-sm mb-1">
          You were {formattedAccuracy}s {isEarly ? 'early' : 'late'}
        </p>
        <h2 className="text-white text-xl font-mono tracking-wide">{category.label.toUpperCase()}</h2>
      </div>

      <div className="w-full h-px bg-white/10 mb-6 max-w-xs"></div>

      <div className="text-xs text-gray-500 mono tracking-wider mb-1">TIME PERCEPTION</div>
      <p className="text-gray-300 text-center mb-6 text-sm max-w-xs">{category.description}</p>

      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <button
          onClick={onTryAgain}
          className="bg-white text-black font-mono py-3 px-6 rounded-full hover:bg-white/90 transition-colors"
        >
          TRY AGAIN
        </button>

        <a
          href={`https://twitter.com/intent/tweet?text=${tweetText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/30 text-white font-mono py-3 px-6 rounded-full hover:bg-white/10 transition-colors text-center"
        >
          SHARE RESULT
        </a>
      </div>
    </div>
  );
};

export default Results;
