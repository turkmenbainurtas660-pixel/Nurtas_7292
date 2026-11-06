import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NumberScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Кнопка назад */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#181725" />
      </TouchableOpacity>

      {/* Заголовок */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Поле ввода номера */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.phoneInputContainer}>
          <View style={styles.flagContainer}>
            <Text style={styles.flagEmoji}>🇧🇩</Text>
            <Text style={styles.codeText}>+880</Text>
          </View>
          <TextInput 
            style={styles.input}
            placeholder="536 789-3421"
            placeholderTextColor="#B3B3B3"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            autoFocus={true}
          />
        </View>
      </View>

      {/* Плавающая круглая кнопка "Далее" (стрелка вправо) */}
      <TouchableOpacity 
        style={styles.fabButton}
        onPress={() => router.push('/verification')}
      >
        <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 40,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 8,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  flagEmoji: {
    fontSize: 24,
    marginRight: 6,
  },
  codeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#030303',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#030303',
  },
  fabButton: {
    position: 'absolute',
    right: 24,
    bottom: 40,
    width: 67,
    height: 67,
    borderRadius: 33.5,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});