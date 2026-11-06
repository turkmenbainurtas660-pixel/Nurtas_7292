import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('Afsar Hossen');
  const [email, setEmail] = useState('imshuvo97@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // После успешной регистрации переходим на главный экран
    router.push('/home');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Иконка морковки */}
        <View style={styles.iconContainer}>
          <Text style={styles.carrotIcon}>🥕</Text>
        </View>

        {/* Заголовок */}
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        {/* Поле Username */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>Username</Text>
          <TextInput 
            style={styles.input}
            placeholder="Afsar Hossen"
            placeholderTextColor="#B3B3B3"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Поле Email */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.emailContainer}>
            <TextInput 
              style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
              placeholder="imshuvo97@gmail.com"
              placeholderTextColor="#B3B3B3"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {email.length > 0 && (
              <Ionicons name="checkmark-sharp" size={20} color="#53B175" />
            )}
          </View>
        </View>

        {/* Поле Password */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput 
              style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
              placeholder="••••••••"
              placeholderTextColor="#B3B3B3"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={22} 
                color="#7C7C7C" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Условия использования */}
        <Text style={styles.termsText}>
          By continuing you agree to our{' '}
          <Text style={styles.linkText}>Terms of Service</Text>
          {' '}and{' '}
          <Text style={styles.linkText}>Privacy Policy.</Text>
        </Text>

        {/* Кнопка Sign Up */}
        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={styles.signUpButtonText}>Sing Up</Text>
        </TouchableOpacity>

        {/* Переход к авторизации */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginPrompt}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/signin')}>
            <Text style={styles.loginText}>Singup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  carrotIcon: {
    fontSize: 40,
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
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 8,
  },
  input: {
    fontSize: 18,
    color: '#181725',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
  },
  termsText: {
    fontSize: 14,
    color: '#7C7C7C',
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  linkText: {
    color: '#53B175',
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: '#53B175',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginPrompt: {
    fontSize: 14,
    color: '#181725',
  },
  loginText: {
    fontSize: 14,
    color: '#53B175',
    fontWeight: '600',
  },
});