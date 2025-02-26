import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Cycle } from "@/components/countdown/utils";

interface IUserCountdownprops {
  focusTime: number;
  breakTime: number;
}

const useCountdown = ({ focusTime, breakTime }: IUserCountdownprops) => {
  const [time, setTime] = useState(focusTime);
  const [cycle, setCycle] = useState<Cycle>(Cycle.READY);
  const [isRunning, setIsRunning] = useState(false);

  console.log(time);
  console.log(cycle);

  const startStop = () => {
    if (cycle === Cycle.READY) {
      setCycle(Cycle.FOCUS);
    }
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(focusTime);
    setIsRunning(false);
    setCycle(Cycle.READY);
  };

  useEffect(() => {
    if (time === 0) {
      if (cycle === Cycle.FOCUS) {
        setCycle(Cycle.BREAK);
        setTime(breakTime);
      } else if (cycle === Cycle.BREAK) {
        setCycle(Cycle.COMPLETED);
        setTime(focusTime);
        setIsRunning(false);
      }
    }
    if (isRunning && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, time]);

  useEffect(() => {
    if (cycle === Cycle.FOCUS) {
      setIsRunning(true);
    }
    if (cycle === Cycle.COMPLETED) {
      setTime(focusTime);
      setIsRunning(false);
      setCycle(Cycle.READY);
    }
    if (cycle === Cycle.BREAK) {
      setIsRunning(true);
    }
  }, [cycle]);

  return { time, isRunning, cycle, startStop, reset };
};

export default useCountdown;
