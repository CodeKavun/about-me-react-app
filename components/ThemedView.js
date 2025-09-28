import { View } from "react-native";
import { useTheme } from "../ThemeContext";

export function ThemedView({ children, style }) {
  const { theme } = useTheme();
  return <View style={[{ backgroundColor: theme.background, flex: 1 }, style]}>{children}</View>;
}