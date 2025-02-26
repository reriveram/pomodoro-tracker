import { Dimensions } from "react-native";
import React from "react";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  withSpring,
} from "react-native-reanimated";

interface ICircularProgressProps {
  progress: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({ progress }: ICircularProgressProps) => {
  const { width } = Dimensions.get("window");
  const size = width - 32;
  const strokeWidth = 10;
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
        stroke="#CC391B"
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
  );
};

export default CircularProgress;
