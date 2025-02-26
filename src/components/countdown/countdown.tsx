import { View, Text, Pressable } from "react-native";
import React from "react";
import useCountdown from "./hooks/use-countdown";
import { Cycle, getTextColor } from "@/components/countdown/utils";

const Countdown = () => {
  const initialTime = 3;
  const breakTime = 2;

  const { formattedTimeLeft, isRunning, cycle, startStop, reset } =
    useCountdown({
      focusTime: initialTime,
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
    </View>
  );
};

export default Countdown;
