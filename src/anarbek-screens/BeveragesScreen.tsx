import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { name: 'Diet Coke', size: '355ml', price: 1.99, emoji: '🥤' },
  { name: 'Sprite Can', size: '325ml', price: 1.50, emoji: '🥤' },
  { name: 'Apple Juice', size: '2L', price: 4.99, emoji: '🧃' },
  { name: 'Orange Juice', size: '2L', price: 4.99, emoji: '🍊' },
  { name: 'Coca Cola', size: '325ml', price: 1.99, emoji: '🥤' },
  { name: 'Pepsi Can', size: '330ml', price: 1.99, emoji: '🥤' },
];

export default function BeveragesScreen() {
  const [added, setAdded] = useState<string[]>([]);

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content}>
      <Text style={s.heading}>Beverages</Text>
      <View style={s.grid}>
        {products.map((p) => (
          <View key={p.name} style={s.card}>
            <Text style={s.image}>{p.emoji}</Text>
            <Text style={s.name}>{p.name}</Text>
            <Text style={s.size}>{p.size}, Price</Text>
            <View style={s.bottom}>
              <Text style={s.price}>${p.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={s.add}
                onPress={() => setAdded(old => [...old, p.name])}
              >
                <Text style={s.addText}>{added.includes(p.name) ? '✓' : '+'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: 'white' },
  content: { padding: 18, paddingBottom: 50 },
  heading: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 25 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 18, padding: 14, marginBottom: 15 },
  image: { fontSize: 65, textAlign: 'center', marginVertical: 25 },
  name: { fontSize: 16, fontWeight: '700' },
  size: { color: '#7C7C7C', marginTop: 5 },
  bottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 },
  price: { fontSize: 16, fontWeight: '700' },
  add: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#53B175', justifyContent: 'center', alignItems: 'center' },
  addText: { color: 'white', fontSize: 25, fontWeight: '700' },
});
