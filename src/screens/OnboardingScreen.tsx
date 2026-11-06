import { useRouter } from 'expo-router';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.background}>
      <StatusBar
        backgroundColor="#53B175"
        barStyle="light-content"
      />

      <TouchableOpacity style={styles.settings}>
        <Text style={styles.settingsIcon}>⚙</Text>
      </TouchableOpacity>

      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.carrotEmoji}>🥕</Text>

          <Text style={styles.title}>
            Welcome{'\n'}to our store
          </Text>

          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/signin')}
          >
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabIcon}>⌂</Text>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabIcon}>▣</Text>
          <Text style={styles.tabText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#53B175',
  },

  settings: {
    position: 'absolute',
    top: 65,
    right: 25,
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: '#1688F5',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  settingsIcon: {
    fontSize: 32,
    color: '#FFFFFF',
  },

  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 35,
  },

  content: {
    alignItems: 'center',
  },

  carrotEmoji: {
    fontSize: 48,
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 52,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#FCFCFC',
    opacity: 0.85,
    textAlign: 'center',
    marginBottom: 35,
  },

  button: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 22,
    borderRadius: 19,
    alignItems: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: '#181725',
    fontSize: 20,
    fontWeight: '600',
  },

  tabBar: {
    height: 85,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabIcon: {
    color: '#FFFFFF',
    fontSize: 27,
  },

  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});