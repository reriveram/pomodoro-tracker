import { View, Text, Pressable } from "react-native";
import React from "react";
import useCountdown from "./hooks/use-countdown";
import { getTextColor } from "@/components/countdown/utils";
import { CircularProgress } from "@/components/circular-progress";

const Countdown = () => {
  const focusTime = 3;
  const breakTime = 2;

  const { progress, formattedTimeLeft, isRunning, cycle, startStop, reset } =
    useCountdown({
      focusTime,
      breakTime,
    });

  return (
    <View>
      <Text className={`text-white text-8xl font-bold ${getTextColor(cycle)}`}>
        {formattedTimeLeft}
      </Text>
      <Pressable onPress={startStop} className="bg-white p-2 rounded-md">
        <Text className="text-black">{isRunning ? "Pause" : "Start"}</Text>
      </Pressable>
      <Pressable onPress={reset} className="bg-white p-2 rounded-md">
        <Text className="text-black">Reset</Text>
      </Pressable>
      <CircularProgress progress={progress} />
    </View>
  );
};

export default Countdown;
