import { StyleSheet, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Дмитро Чапни</Text>
        <Text style={styles.subtitle}>18 років</Text>
        <Text style={styles.subtitle}>Середня Освіта</Text>
      </View>
      <Button title="Хоббі" onPress={() => router.push('/hobbies')} />
    </View>
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
    fontSize: 36,
    color: "#38434D",
  },
});
