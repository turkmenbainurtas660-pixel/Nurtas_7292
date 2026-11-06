import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VerificationScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <Text style={styles.label}>Code</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="- - - -" 
        keyboardType="number-pad" 
        maxLength={4}
        placeholderTextColor="#B3B3B3"
      />

      <TouchableOpacity style={styles.fab} onPress={() => router.push('/location')}>
        <Text style={styles.fabText}>➔</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    padding: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    fontSize: 24,
    paddingBottom: 8,
    letterSpacing: 10,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 40,
    backgroundColor: '#53B175',
    width: 67,
    height: 67,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: '#fff',
    fontSize: 24,
  },
});