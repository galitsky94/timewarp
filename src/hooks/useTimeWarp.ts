import { useState, useEffect, useRef } from 'react';

// Define result categories based on accuracy
const getResultCategory = (accuracy: number): { label: string; description: string } => {
  const absAccuracy = Math.abs(accuracy);

  if (absAccuracy < 0.5) {
    return {
      label: "Time Master",
      description: "Your internal clock is frighteningly accurate. Are you sure you're not a robot?"
    };
  }

  if (absAccuracy < 1.5) {
    return {
      label: "Chrono Sage",
      description: "You have an excellent sense of time. The universe might run on your schedule."
    };
  }

  if (absAccuracy < 3) {
    return {
      label: "Average Timer",
      description: "Pretty normal time perception. Not too fast, not too slow."
    };
  }

  if (accuracy > 3) {
    return {
      label: "Time Rusher",
      description: "Time flies for you! You live in the fast lane."
    };
  }

  return {
    label: "Time Lingerer",
    description: "You savor every moment. Time moves slowly in your world."
  };
};

// Define the hook interface
export interface TimeWarpResult {
  actualTime: number;
  accuracy: number;
  category: {
    label: string;
    description: string;
  };
}

export const useTimeWarp = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<TimeWarpResult | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Start the timer
  const startTest = () => {
    setIsRunning(true);
    setResult(null);
    startTimeRef.current = Date.now();
  };

  // Stop the timer and calculate results
  const stopTest = () => {
    if (!isRunning || startTimeRef.current === null) return;

    const endTime = Date.now();
    const actualTime = (endTime - startTimeRef.current) / 1000;
    const targetTime = 10; // Target is 10 seconds
    const accuracy = actualTime - targetTime;

    const category = getResultCategory(accuracy);

    setResult({
      actualTime,
      accuracy,
      category
    });

    setIsRunning(false);
    startTimeRef.current = null;
  };

  // Reset the test
  const resetTest = () => {
    setIsRunning(false);
    setResult(null);
    startTimeRef.current = null;
  };

  return {
    isRunning,
    result,
    startTest,
    stopTest,
    resetTest
  };
};
