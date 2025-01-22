import { Text, View } from "@/src/components/Themed";
import EditScreenInfo from "@/src/components/EditScreenInfo";

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab One</Text>
      <View
        className="h-[1px] w-4/5 my-8"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
