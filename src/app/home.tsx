import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

// Данные для эксклюзивных предложений
const exclusiveOffers = [
  {
    id: '1',
    name: 'Organic Bananas',
    weight: '7pcs, Priceg',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/3143/3143645.png',
  },
  {
    id: '2',
    name: 'Red Apple',
    weight: '1kg, Priceg',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png',
  },
];

// Данные для популярных товаров (Best Selling)
const bestSelling = [
  {
    id: '1',
    name: 'Bell Pepper Red',
    weight: '1kg, Priceg',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/1202/1202125.png',
  },
  {
    id: '2',
    name: 'Ginger',
    weight: '250g, Priceg',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/4142/4142784.png',
  },
];

// Данные для мясной/бакалейной секции (Groceries)
const groceriesProducts = [
  {
    id: '1',
    name: 'Beef Bone',
    weight: '1kg, Priceg',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/3082/3082060.png',
  },
  {
    id: '2',
    name: 'Broiler Chicken',
    weight: '1kg, Priceg',
    price: '$4.99',
    image: 'https://cdn-icons-png.flaticon.com/512/1041/1041883.png',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const renderProductCard = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productWeight}>{item.weight}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Шапка: Иконка и Локация */}
        <View style={styles.header}>
          <Text style={styles.carrotIcon}>🥕</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={18} color="#4C4F4D" />
            <Text style={styles.locationText}>Dhaka, Banassre</Text>
          </View>
        </View>

        {/* Поисковая строка */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#7C7C7C" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search Store" 
            placeholderTextColor="#7C7C7C" 
            style={styles.searchInput} 
          />
        </View>

        {/* Промо-баннер */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSubtitle}>Get Up To 40% OFF</Text>
          </View>
        </View>

        {/* Секция: Exclusive Offer */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>
        <FlatList 
          data={exclusiveOffers} 
          renderItem={renderProductCard} 
          keyExtractor={(item) => item.id} 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

        {/* Секция: Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>
        <FlatList 
          data={bestSelling} 
          renderItem={renderProductCard} 
          keyExtractor={(item) => item.id} 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

        {/* Секция: Groceries Category Banners */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.groceriesRow}>
          <View style={[styles.categoryCard, { backgroundColor: '#F8A44C15' }]}>
            <Text style={styles.categoryTitle}>Pulses</Text>
          </View>
          <View style={[styles.categoryCard, { backgroundColor: '#53B17515' }]}>
            <Text style={styles.categoryTitle}>Rice</Text>
          </View>
        </ScrollView>

        {/* Секция: Groceries Products */}
        <FlatList 
          data={groceriesProducts} 
          renderItem={renderProductCard} 
          keyExtractor={(item) => item.id} 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

      </ScrollView>

      {/* Нижнее меню навигации (Bottom Navigation Bar) */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="storefront-outline" size={24} color="#53B175" />
          <Text style={[styles.tabLabel, { color: '#53B175' }]}>Shop</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/explore')}>
          <Ionicons name="search-outline" size={24} color="#181725" />
          <Text style={styles.tabLabel}>Explore</Text>
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
  },
  scrollContent: {
    paddingTop: 50,
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carrotIcon: {
    fontSize: 30,
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4C4F4D',
    marginLeft: 4,
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
  bannerContainer: {
    height: 115,
    backgroundColor: '#F2F3F2',
    marginHorizontal: 24,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  bannerTextContainer: {
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#030303',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#53B175',
    fontWeight: '600',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#181725',
  },
  seeAllText: {
    fontSize: 16,
    color: '#53B175',
    fontWeight: '600',
  },
  listContainer: {
    paddingLeft: 24,
    paddingRight: 12,
    marginBottom: 25,
  },
  card: {
    width: 173,
    height: 248,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    padding: 15,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 80,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    marginTop: 10,
  },
  productWeight: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  addButton: {
    width: 45,
    height: 45,
    borderRadius: 17,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groceriesRow: {
    paddingLeft: 24,
    marginBottom: 20,
  },
  categoryCard: {
    width: 248,
    height: 105,
    borderRadius: 18,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 15,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
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