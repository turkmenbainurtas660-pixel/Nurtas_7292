import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Санаттар тізімі (Categories)
const categories = [
  { id: '1', name: 'Frash Fruits & Vegetable', color: '#53B17515', borderColor: '#53B17530', image: 'https://cdn-icons-png.flaticon.com/512/1147/1147805.png' },
  { id: '2', name: 'Cooking Oil & Ghee', color: '#F8A44C15', borderColor: '#F8A44C30', image: 'https://cdn-icons-png.flaticon.com/512/3076/3076879.png' },
  { id: '3', name: 'Meat & Fish', color: '#F7A59315', borderColor: '#F7A59330', image: 'https://cdn-icons-png.flaticon.com/512/3082/3082060.png' },
  { id: '4', name: 'Bakery & Snacks', color: '#D3B0E015', borderColor: '#D3B0E030', image: 'https://cdn-icons-png.flaticon.com/512/3081/3081986.png' },
  { id: '5', name: 'Dairy & Eggs', color: '#FDE59815', borderColor: '#FDE59830', image: 'https://cdn-icons-png.flaticon.com/512/3054/3054942.png' },
  { id: '6', name: 'Beverages', color: '#B7DFF515', borderColor: '#B7DFF530', image: 'https://cdn-icons-png.flaticon.com/512/3050/3050139.png' },
];

export default function ExploreScreen() {
  const router = useRouter();

  const renderCategoryItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: item.color, borderColor: item.borderColor }]}
      onPress={() => alert(`Санат: ${item.name}`)}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      {/* Поиск */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#7C7C7C" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search Store" 
          placeholderTextColor="#7C7C7C" 
          style={styles.searchInput} 
        />
      </View>

      {/* Санаттардың сеткасы (Grid) */}
      <FlatList 
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Төменгі навигация панелі */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Ionicons name="storefront-outline" size={24} color="#181725" />
          <Text style={styles.tabLabel}>Shop</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="search" size={24} color="#53B175" />
          <Text style={[styles.tabLabel, { color: '#53B175' }]}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/cart')}>
          <Ionicons name="cart-outline" size={24} color="#181725" />
          <Text style={styles.tabLabel}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="heart-outline" size={24} color="#181725" />
          <Text style={styles.tabLabel}>Favourite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={24} color="#181725" />
          <Text style={styles.tabLabel}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    marginHorizontal: 24,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#181725',
  },
  gridContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  card: {
    flex: 1,
    height: 190,
    margin: 8,
    borderRadius: 18,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardImage: {
    width: 90,
    height: 75,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    textAlign: 'center',
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    elevation: 8,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#181725',
    marginTop: 4,
    fontWeight: '500',
  },
});