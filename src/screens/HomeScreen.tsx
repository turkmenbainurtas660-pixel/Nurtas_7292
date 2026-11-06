import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>📍 Dhaka, Banasree</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Exclusive Offer</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.productName}>Organic Bananas</Text>
          <Text style={styles.productPrice}>$4.99</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.productName}>Red Apple</Text>
          <Text style={styles.productPrice}>$4.99</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C4F4D',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    padding: 15,
    backgroundColor: '#FFF',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginTop: 5,
  },
});