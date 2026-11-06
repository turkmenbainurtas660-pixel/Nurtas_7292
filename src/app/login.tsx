import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      {/* Жоғарғы сурет */}
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop' }} 
        style={styles.headerImage}
      >
        <View style={styles.imageOverlay} />
      </ImageBackground>

      {/* Контент бөлігі */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get your groceries{'\n'}with nectar</Text>

        {/* Телефон нөмірін енгізу бөлімі */}
        <View style={styles.phoneInputContainer}>
          <View style={styles.flagContainer}>
            <Text style={styles.flagEmoji}>🇧🇩</Text>
            <Text style={styles.codeText}>+880</Text>
          </View>
          <TextInput 
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#B3B3B3"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Әлеуметтік желілер арқылы кіру */}
        <Text style={styles.orText}>Or connect with social media</Text>

        {/* Google батырмасы */}
        <TouchableOpacity 
          style={[styles.socialButton, styles.googleButton]}
          onPress={() => alert('Google арқылы кіру')}
        >
          <Text style={styles.socialIcon}>G</Text>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Facebook батырмасы */}
        <TouchableOpacity 
          style={[styles.socialButton, styles.facebookButton]}
          onPress={() => alert('Facebook арқылы кіру')}
        >
          <Text style={styles.socialIcon}>f</Text>
          <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 30,
    lineHeight: 32,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 8,
    marginBottom: 40,
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
  orText: {
    textAlign: 'center',
    color: '#828282',
    fontSize: 14,
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 18,
    marginBottom: 16,
  },
  googleButton: {
    backgroundColor: '#5383EC',
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  facebookButton: {
    backgroundColor: '#4A66AC',
  },
  facebookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  socialIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15,
  },
});