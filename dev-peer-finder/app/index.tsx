import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router"
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>This Uses Expo Router Now</Text>

        <Link href="/map">
            Go to Map
        </Link>
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
});
