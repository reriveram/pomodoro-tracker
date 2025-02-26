export enum Cycle {
  READY = "ready",
  FOCUS = "focus",
  BREAK = "break",
  COMPLETED = "completed",
}

export const getTextColor = (cycle: Cycle) => {
  if (cycle === Cycle.FOCUS) {
    return "text-red-500";
  }
  if (cycle === Cycle.BREAK) {
    return "text-green-500";
  }
  return "text-white";
};

export const convertTimeToFormat = (time: number) => {
  return {
    minutes: Math.floor(time),
    seconds: 0,
  };
};

export const getFormattedTimeLeft = (timeLeft: {
  minutes: number;
  seconds: number;
}) => {
  return `${String(timeLeft.minutes).padStart(2, "0")}:${String(
    timeLeft.seconds
  ).padStart(2, "0")}`;
};
