import { Button } from "react-native";
import { useTheme } from "../ThemeContext";

export function ThemedButton({ title, onPress, style }) {
  const { theme } = useTheme();
  return <Button title={title} onPress={onPress} style={[{ color: theme.buttonText, backgroundColor: theme.buttonBackground }, style]} />;
}