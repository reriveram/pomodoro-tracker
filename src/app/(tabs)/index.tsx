import { Countdown } from "@/components/countdown";
import { View } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="h-[1px] w-4/5 my-8" />
      <Countdown />
    </View>
  );
}
