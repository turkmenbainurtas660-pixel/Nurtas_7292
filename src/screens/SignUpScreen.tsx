import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Afor Pex" 
        placeholderTextColor="#B3B3B3"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input} 
        placeholder="imshuk@gmail.com" 
        placeholderTextColor="#B3B3B3"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="••••••••" 
        secureTextEntry
        placeholderTextColor="#B3B3B3"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 6,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 24,
    color: '#000',
  },
  button: {
    backgroundColor: '#53B175',
    padding: 18,
    borderRadius: 19,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});