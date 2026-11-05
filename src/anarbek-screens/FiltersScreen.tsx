import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';

const categories = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'];
const brands = ['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'];

export default function FiltersScreen() {
  const [selected, setSelected] = useState<string[]>(['Eggs', 'Cocola']);

  const toggle = (name: string) => {
    setSelected(old =>
      old.includes(name) ? old.filter(x => x !== name) : [...old, name]
    );
  };

  const group = (title: string, items: string[]) => (
    <View style={s.group}>
      <Text style={s.title}>{title}</Text>
      {items.map(item => (
        <TouchableOpacity key={item} style={s.option} onPress={() => toggle(item)}>
          <View style={[s.check, selected.includes(item) && s.checked]}>
            <Text style={{ color: 'white' }}>{selected.includes(item) ? '✓' : ''}</Text>
          </View>
          <Text style={[s.label, selected.includes(item) && s.active]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={s.page}>
      <Text style={s.heading}>Filters</Text>
      <ScrollView style={s.body}>
        {group('Categories', categories)}
        {group('Brand', brands)}
      </ScrollView>
      <TouchableOpacity
        style={s.button}
        onPress={() => Alert.alert('Filters Applied', selected.join(', ') || 'All products')}
      >
        <Text style={s.buttonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: '700', textAlign: 'center', padding: 22 },
  body: { backgroundColor: '#F2F3F2', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 22 },
  group: { marginBottom: 35 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 22 },
  option: { flexDirection: 'row', alignItems: 'center', marginBottom: 22 },
  check: { width: 24, height: 24, borderRadius: 7, borderWidth: 2, borderColor: '#B1B1B1', marginRight: 14, alignItems: 'center' },
  checked: { backgroundColor: '#53B175', borderColor: '#53B175' },
  label: { fontSize: 16, color: '#181725' },
  active: { color: '#53B175' },
  button: { backgroundColor: '#53B175', margin: 20, padding: 20, borderRadius: 18, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
