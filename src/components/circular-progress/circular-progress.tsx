import { Dimensions } from "react-native";
import React from "react";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";

interface ICircularProgressProps {
  progress: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({ progress }: ICircularProgressProps) => {
  const { width } = Dimensions.get("window");
  const size = width - 32;
  const strokeWidth = 50;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = withTiming(circumference * (1 - progress), {
      duration: 1500,
      easing: (x) => x, // Linear easing for smooth continuous motion
    });

    return {
      strokeDashoffset,
    };
  });

  return (
    <Svg width={size} height={size}>
      <AnimatedCircle
        stroke="white"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        {...{ strokeWidth }}
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
