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
