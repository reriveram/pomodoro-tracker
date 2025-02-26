import { useEffect, useState } from "react";
import { Cycle } from "@/components/countdown/utils";

interface IUserCountdownprops {
  focusTime: number;
  breakTime: number;
}

const useCountdown = ({ focusTime, breakTime }: IUserCountdownprops) => {
  const [time, setTime] = useState(focusTime);
  const [cycle, setCycle] = useState<Cycle>(Cycle.READY);
  const [isRunning, setIsRunning] = useState(false);

  const startStop = () => {
    if (cycle === Cycle.READY) {
      setCycle(Cycle.FOCUS);
    }
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setTime(focusTime);
    setIsRunning(false);
    setCycle(Cycle.READY);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      if (time === 0) {
        switch (cycle) {
          case Cycle.FOCUS:
            setCycle(Cycle.BREAK);
            setTime(breakTime);
            break;
          case Cycle.BREAK:
            setCycle(Cycle.READY);
            setTime(focusTime);
            setIsRunning(false);
            break;
        }
      } else {
        intervalId = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, time, cycle, focusTime, breakTime]);

  return { time, isRunning, cycle, startStop, reset };
};

export default useCountdown;
