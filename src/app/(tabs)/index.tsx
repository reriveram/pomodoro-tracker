import { Text, View } from "@/components/Themed";
import EditScreenInfo from "@/components/EditScreenInfo";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold text-white">Tab One</Text>
      <Text className="text-2xl font-bold">Tab One</Text>
      <View
        className="h-[1px] w-4/5 my-8"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
