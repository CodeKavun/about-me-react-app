import { Text } from "react-native";
import { useTheme } from "../ThemeContext";

export function ThemedText({ children, style }) {
  const { theme } = useTheme();
  return <Text style={[{ color: theme.text }, style]}>{children}</Text>;
}