import { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // 2 секундтан кейін басты экранға өту
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 1. Splash Screen (Заставка)
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🥕</Text>
          <Text style={styles.logoText}>nectar</Text>
        </View>
        <Text style={styles.subLogoText}>online groceriet</Text>
      </View>
    );
  }

  // 2. Welcome Screen (Приветствие)
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop' }} 
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.carrotIconLarge}>🥕</Text>
            <Text style={styles.title}>Welcome{'\n'}to our store</Text>
            <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
            
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => alert('Кнопка басылды!')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  // Splash Screen стильтері
  splashContainer: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 40,
    marginRight: 10,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  subLogoText: {
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 5,
    marginTop: 5,
  },

  // Welcome Screen стильтері
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', // Суретті күңгірттеу үшін
    justifyContent: 'flex-end',
    paddingBottom: 60,
    paddingHorizontal: 24,
  },
  textContainer: {
    alignItems: 'center',
  },
  carrotIconLarge: {
    fontSize: 48,
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 44,
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
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