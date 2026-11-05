import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  ['Fresh Fruits & Vegetable', '🍎', '#EEF7F0'],
  ['Cooking Oil & Ghee', '🫒', '#FFF4E5'],
  ['Meat & Fish', '🥩', '#FDECEC'],
  ['Bakery & Snacks', '🥖', '#F3EDFC'],
  ['Dairy & Eggs', '🥚', '#FFF8E5'],
  ['Beverages', '🥤', '#EAF4FF'],
];

export default function ExploreScreen({ navigation }: any) {
  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <Text style={s.heading}>Find Products</Text>
      <TextInput placeholder="🔍 Search Store" style={s.search} />
      <View style={s.grid}>
        {categories.map(([name, emoji, color]) => (
          <TouchableOpacity
            key={name}
            style={[s.category, { backgroundColor: color }]}
            onPress={() => navigation?.navigate?.('Beverages')}
          >
            <Text style={s.emoji}>{emoji}</Text>
            <Text style={s.name}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, paddingBottom: 50 },
  heading: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 22 },
  search: { backgroundColor: '#F2F3F2', borderRadius: 14, padding: 16, marginBottom: 22 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  category: { width: '48%', height: 175, borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E2', marginBottom: 15, alignItems: 'center', justifyContent: 'center', padding: 12 },
  emoji: { fontSize: 55, marginBottom: 18 },
  name: { fontSize: 15, fontWeight: '700', textAlign: 'center', color: '#181725' },
});
