// @ts-nocheck
import "expo-router/entry";
import { Text, TextInput, TextProps, TextInputProps } from "react-native";

const defaultTextProps: Partial<TextProps> = {
  allowFontScaling: false,
};

const defaultTextInputProps: Partial<TextInputProps> = {
  allowFontScaling: false,
};

Text.defaultProps = defaultTextProps;
TextInput.defaultProps = defaultTextInputProps;
