import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const initial = [
  { id: 1, name: 'Bell Pepper Red', size: '1kg', price: 4.99, emoji: '🫑', qty: 1 },
  { id: 2, name: 'Egg Chicken Red', size: '4pcs', price: 1.99, emoji: '🥚', qty: 1 },
  { id: 3, name: 'Organic Bananas', size: '12kg', price: 3.00, emoji: '🍌', qty: 1 },
  { id: 4, name: 'Ginger', size: '250gm', price: 2.99, emoji: '🫚', qty: 1 },
];

export default function MyCartScreen() {
  const [items, setItems] = useState(initial);
  const change = (id: number, delta: number) => {
    setItems(old => old.map(p =>
      p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
    ));
  };
  const remove = (id: number) => setItems(old => old.filter(p => p.id !== id));
  const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <View style={s.page}>
      <Text style={s.heading}>My Cart</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        {items.map(p => (
          <View key={p.id} style={s.item}>
            <Text style={s.emoji}>{p.emoji}</Text>
            <View style={s.info}>
              <Text style={s.name}>{p.name}</Text>
              <Text style={s.size}>{p.size}, Price</Text>
              <View style={s.controls}>
                <TouchableOpacity onPress={() => change(p.id, -1)}><Text style={s.control}>−</Text></TouchableOpacity>
                <Text style={s.qty}>{p.qty}</Text>
                <TouchableOpacity onPress={() => change(p.id, 1)}><Text style={s.plus}>+</Text></TouchableOpacity>
              </View>
            </View>
            <View style={s.right}>
              <TouchableOpacity onPress={() => remove(p.id)}><Text style={s.remove}>×</Text></TouchableOpacity>
              <Text style={s.price}>${(p.price * p.qty).toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={s.button}
        onPress={() => Alert.alert('Checkout', `Total: $${total.toFixed(2)}`)}
      >
        <Text style={s.buttonText}>Go to Checkout    ${total.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: '700', textAlign: 'center', padding: 20 },
  item: { flexDirection: 'row', padding: 18, borderTopWidth: 1, borderColor: '#E2E2E2', alignItems: 'center' },
  emoji: { fontSize: 45, width: 75 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700' },
  size: { color: '#7C7C7C', marginTop: 5 },
  controls: { flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20 },
  control: { fontSize: 26, color: '#B3B3B3' },
  plus: { fontSize: 26, color: '#53B175' },
  qty: { fontSize: 17, fontWeight: '700' },
  right: { alignItems: 'flex-end', justifyContent: 'space-between', height: 90 },
  remove: { fontSize: 26, color: '#B3B3B3' },
  price: { fontSize: 16, fontWeight: '700' },
  button: { position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#53B175', borderRadius: 18, padding: 20, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 17, fontWeight: '700' },
});
