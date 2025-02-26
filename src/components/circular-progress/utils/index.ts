import { Cycle } from "@/components/countdown/utils";

export const getStrokeColor = (cycle: Cycle) => {
  if (cycle === Cycle.FOCUS) {
    return "#CC391B";
  }
  if (cycle === Cycle.BREAK) {
    return "#1BCC24";
  }
  return "#404040";
};
