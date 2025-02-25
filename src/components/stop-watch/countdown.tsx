import { View, Text, Pressable } from "react-native";
import React from "react";
import useCountdown from "./hooks/use-countdown";

const Countdown = () => {
  const initialTime = 45;
  const breakTime = 5;

  const { time, isRunning, startStop, reset } = useCountdown({
    initialTime,
    breakTime,
  });
  return (
    <View>
      <Text className="text-white text-8xl font-bold">{time}</Text>

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
