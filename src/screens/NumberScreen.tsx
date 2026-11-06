import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NumberScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.label}>Mobile Number</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>🇰🇿 +7</Text>
        <TextInput 
          style={styles.input} 
          placeholder="701 123 4567" 
          keyboardType="phone-pad"
          placeholderTextColor="#B3B3B3"
        />
      </View>

      <TouchableOpacity style={styles.fab} onPress={() => router.push('/verification')}>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  prefix: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#030303',
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