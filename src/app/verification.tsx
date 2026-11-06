import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VerificationScreen() {
  const router = useRouter();
  const [code, setCode] = useState('');

  const handleResend = () => {
    alert('Код отправлен повторно!');
  };

  const handleNext = () => {
    // После успешной верификации переходим, например, к выбору локации или на главный экран
    router.push('/location'); 
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Кнопка "Назад" */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#181725" />
      </TouchableOpacity>

      {/* Заголовок */}
      <Text style={styles.title}>Enter your 4-digit code</Text>

      {/* Поле ввода кода */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Code</Text>
        <TextInput 
          style={styles.input}
          placeholder="- - - -"
          placeholderTextColor="#B3B3B3"
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
          autoFocus={true}
        />
      </View>

      {/* Нижняя панель с кнопками */}
      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.fabButton}
          onPress={handleNext}
        >
          <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
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
    color: '#181725',
    marginBottom: 40,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 10,
  },
  input: {
    fontSize: 24,
    letterSpacing: 8,
    color: '#181725',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  bottomRow: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resendText: {
    fontSize: 18,
    color: '#53B175',
    fontWeight: '500',
  },
  fabButton: {
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