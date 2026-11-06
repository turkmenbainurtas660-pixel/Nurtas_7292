import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  // 2 секундтан кейін автоматты түрде Onboarding бетіне өтеді
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.carrotIcon}>🥕</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.logoText}>nectar</Text>
          <Text style={styles.subText}>online groceriet</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175', // Figma-дағы негізгі жасыл түс
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carrotIcon: {
    fontSize: 45,
    marginRight: 10,
  },
  textWrapper: {
    alignItems: 'flex-start',
  },
  logoText: {
    fontSize: 54,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 1,
    lineHeight: 60,
  },
  subText: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 4.5,
    textTransform: 'lowercase',
    marginTop: -5,
  },
});