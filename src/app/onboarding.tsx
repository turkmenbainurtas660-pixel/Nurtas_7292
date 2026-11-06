import { useRouter } from 'expo-router';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome{'\n'}to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/signin')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 60,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 52,
  },
  subtitle: {
    fontSize: 16,
    color: '#FCFCFC',
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.8,
  },
  button: {
    backgroundColor: '#53B175',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});