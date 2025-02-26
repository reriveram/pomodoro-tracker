import { Dimensions, Pressable, Text, View } from "react-native";
import React from "react";
import Svg, {
  Circle,
  G,
  LinearGradient,
  RadialGradient,
  Stop,
} from "react-native-svg";
import Animated, {
  useAnimatedProps,
  withSpring,
} from "react-native-reanimated";
import { Cycle } from "@/components/countdown/utils";
import { getStrokeColor } from "@/components/circular-progress/utils";

interface ICircularProgressProps {
  progress: number;
  cycle: Cycle;
  children: React.ReactNode;
  onPress: () => void;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({
  progress,
  cycle,
  children,
  onPress,
}: ICircularProgressProps) => {
  const { width } = Dimensions.get("window");
  const size = width - 32;
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withSpring(circumference * (1 - progress), {
        mass: 1,
        damping: 20,
        stiffness: 90,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      }),
    };
  });

  return (
    <Pressable
      onPress={onPress}
      style={{ position: "relative", width: size, height: size }}
    >
      <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center z-10">
        {children}
      </View>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#404040"
          strokeWidth={strokeWidth}
          strokeDashoffset={circumference}
        />
        <AnimatedCircle
          stroke={getStrokeColor(cycle)}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference}
          animatedProps={animatedProps}
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
    </Pressable>
  );
};

export default CircularProgress;
