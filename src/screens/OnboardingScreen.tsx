import { useRouter } from 'expo-router'; // 1. Импорттау
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter(); // 2. Хукты шақыру

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our store</Text>
      <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

      {/* 3. Батырманы басқанда login немесе home бетіне өту */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/signup')} 
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30,
    paddingBottom: 60,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#FCFCFC',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.8,
  },
  button: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 18,
    borderRadius: 19,
    alignItems: 'center',
  },
  buttonText: {
    color: '#181725',
    fontSize: 18,
    fontWeight: '600',
  },
});