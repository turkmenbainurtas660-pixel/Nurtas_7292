import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const products = [
  'Egg Chicken Red', 'Egg Chicken White',
  'Egg Pasta', 'Egg Noodles', 'Mayonnaise',
  'Diet Coke', 'Sprite Can', 'Natural Red Apple',
  'Orange Juice', 'Pepsi Can'
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const filtered = products.filter(p =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={s.page}>
      <Text style={s.heading}>Search Products</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="🔍 Search Store"
        style={s.search}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListEmptyComponent={<Text>No products found</Text>}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Text style={s.image}>🛒</Text>
            <Text style={s.name}>{item}</Text>
            <Text style={s.price}>$4.99</Text>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff', padding: 18 },
  heading: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 20 },
  search: { backgroundColor: '#F2F3F2', padding: 16, borderRadius: 14, marginBottom: 20 },
  card: { width: '48%', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 18, padding: 15, marginBottom: 15 },
  image: { fontSize: 60, textAlign: 'center', marginVertical: 25 },
  name: { fontSize: 15, fontWeight: '700' },
  price: { fontSize: 17, fontWeight: '700', marginTop: 18 },
});
