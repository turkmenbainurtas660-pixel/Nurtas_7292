import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LocationScreen() {
  const router = useRouter();
  const [selectedZone, setSelectedZone] = useState('Banasree');
  const [selectedArea, setSelectedArea] = useState('');

  const handleSubmit = () => {
    // После выбора локации переходим на главный экран или экран входа/авторизации
    router.push('/login'); 
  };

  return (
    <View style={styles.container}>
      {/* Кнопка "Назад" */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#181725" />
      </TouchableOpacity>

      {/* Иллюстрация / Иконка локации (опционально, по дизайну) */}
      <View style={styles.imageContainer}>
        <Ionicons name="location-outline" size={80} color="#53B175" />
      </View>

      {/* Заголовок и описание */}
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      {/* Выбор зоны (Your Zone) */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Your Zone</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedZone}</Text>
          <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
        </TouchableOpacity>
      </View>

      {/* Выбор района (Your Area) */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Your Area</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={[styles.dropdownText, !selectedArea && styles.placeholderText]}>
            {selectedArea || 'Types of your area'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
        </TouchableOpacity>
      </View>

      {/* Кнопка Submit */}
      <TouchableOpacity 
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingHorizontal: 24,
    paddingTop: 60,
    justifyContent: 'flex-start',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#181725',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  inputSection: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 10,
  },
  dropdownText: {
    fontSize: 18,
    color: '#181725',
    fontWeight: '500',
  },
  placeholderText: {
    color: '#B3B3B3',
    fontWeight: '400',
  },
  submitButton: {
    backgroundColor: '#53B175',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});