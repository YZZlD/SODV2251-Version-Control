import { useRouter,} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Map() {

  const router = useRouter();

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.navigationLinkContainer}>
                <Pressable onPress={() => router.navigate("/")} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                    <Text>Home</Text>
                </Pressable>
        </View>

      <Text>This is the Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#5e5ef8",
    borderWidth: 2,
    borderColor: "#000000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  navigationLinkContainer: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  buttonPressed: {
    opacity: 0.9,
  },
});
