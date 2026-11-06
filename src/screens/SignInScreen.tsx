import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>

      <TouchableOpacity style={styles.phoneButton} onPress={() => router.push('/number')}>
        <Text style={styles.phoneButtonText}>🇰🇿 +7  Continue with Phone</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#5383EC' }]} onPress={() => router.push('/login')}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4A66AC' }]} onPress={() => router.push('/signup')}>
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 40,
  },
  phoneButton: {
    backgroundColor: '#F2F3F2',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 19,
    marginBottom: 15,
  },
  phoneButtonText: {
    fontSize: 16,
    color: '#030303',
    fontWeight: '500',
  },
  socialButton: {
    paddingVertical: 18,
    borderRadius: 19,
    alignItems: 'center',
    marginBottom: 15,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});