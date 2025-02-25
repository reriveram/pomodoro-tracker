import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

interface IUserCountdownprops {
  initialTime: number;
  breakTime: number;
}

enum CountdownState {
  INITIAL = "initial",
  RUNNING = "running",
  BREAK = "break",
  COMPLETED = "completed",
}

const useCountdown = ({ initialTime, breakTime }: IUserCountdownprops) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, time]);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
    }
  }, [time]);

  return { time, isRunning, startStop, reset };
};

export default useCountdown;
