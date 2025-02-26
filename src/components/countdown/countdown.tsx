import { View, Text, Pressable } from "react-native";
import React from "react";
import useCountdown from "./hooks/use-countdown";
import { getTextColor } from "@/components/countdown/utils";
import { CircularProgress } from "@/components/circular-progress";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
      <CircularProgress progress={progress} cycle={cycle} onPress={startStop}>
        <View className="flex-col items-center justify-center gap-8">
          {cycle === "focus" ? (
            <Ionicons name="bulb-outline" size={30} color="white" />
          ) : (
            <FontAwesome name="coffee" size={30} color="white" />
          )}
          <Text
            className={`text-white text-8xl font-bold ${getTextColor(cycle)}`}
          >
            {formattedTimeLeft}
          </Text>
          {isRunning ? (
            <FontAwesome name="pause" size={40} color="white" />
          ) : (
            <FontAwesome name="play" size={40} color="white" />
          )}
        </View>
      </CircularProgress>
      <Pressable onPress={reset} className="bg-white p-2 rounded-md">
        <Text className="text-black">Reset</Text>
      </Pressable>
    </View>
  );
};

export default Countdown;
