import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-xl font-bold text-white">Tab One</Text>
      <Text className="text-2xl font-bold bg-blue-500">Tab One</Text>
      <View className="h-[1px] w-4/5 my-8" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
