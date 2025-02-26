import { useEffect, useRef, useState } from "react";
import {
  convertTimeToFormat,
  Cycle,
  getFormattedTimeLeft,
} from "@/components/countdown/utils";

interface IUserCountdownprops {
  focusTime: number; // time in minutes
  breakTime: number; // time in minutes
}

const useCountdown = ({ focusTime, breakTime }: IUserCountdownprops) => {
  const formattedFocusTime = convertTimeToFormat(focusTime);
  const formattedBreakTime = convertTimeToFormat(breakTime);

  const [timeLeft, setTimeLeft] = useState(formattedFocusTime);
  const [cycle, setCycle] = useState<Cycle>(Cycle.READY);
  const [isRunning, setIsRunning] = useState(false);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  const startStop = () => {
    if (cycle === Cycle.READY) {
      setCycle(Cycle.FOCUS);
    }
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setTimeLeft(formattedFocusTime);
    setIsRunning(false);
    setCycle(Cycle.READY);
  };

  useEffect(() => {
    if (isRunning) {
      if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        switch (cycle) {
          case Cycle.FOCUS:
            setCycle(Cycle.BREAK);
            setTimeLeft(formattedBreakTime);
            break;
          case Cycle.BREAK:
            setCycle(Cycle.READY);
            setTimeLeft(formattedFocusTime);
            setIsRunning(false);
            break;
          default:
            break;
        }
      } else {
        timerInterval.current = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime.seconds === 0) {
              return {
                minutes: prevTime.minutes - 1,
                seconds: 59,
              };
            }
            return {
              minutes: prevTime.minutes,
              seconds: prevTime.seconds - 1,
            };
          });
        }, 1000);
      }
    }

    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    };
  }, [isRunning, timeLeft, cycle, focusTime, breakTime]);

  const formattedTimeLeft = getFormattedTimeLeft(timeLeft);

  return { formattedTimeLeft, isRunning, cycle, startStop, reset };
};

export default useCountdown;
