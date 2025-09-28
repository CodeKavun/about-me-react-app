import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";
import { ThemedButton } from "../components/ThemedButton";
import { useTheme } from "../ThemeContext";

export default function Page() {
  const router = useRouter();
  const { toggleTheme } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.main}>
        <ThemedText style={styles.title}>Дмитро Чапни</ThemedText>
        <ThemedText style={styles.subtitle}>18 років</ThemedText>
        <ThemedText style={styles.subtitle}>Середня Освіта</ThemedText>
      </ThemedView>
      <ThemedButton title="Хоббі" onPress={() => router.push('/hobbies')} />
      <ThemedButton title="Змінити Тему" onPress={toggleTheme} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36
  },
});
