import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>My Cart</Text>
      
      <ScrollView style={styles.itemList}>
        <View style={styles.cartItem}>
          <Text style={styles.itemEmoji}>🫑</Text>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Bell Pepper Red</Text>
            <Text style={styles.itemQuantity}>1kg, Price</Text>
          </View>
          <Text style={styles.itemPrice}>$4.99</Text>
        </View>

        <View style={styles.cartItem}>
          <Text style={styles.itemEmoji}>🥚</Text>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Egg Chicken Red</Text>
            <Text style={styles.itemQuantity}>4pcs, Price</Text>
          </View>
          <Text style={styles.itemPrice}>$1.99</Text>
        </View>

        <View style={styles.cartItem}>
          <Text style={styles.itemEmoji}>🍌</Text>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Organic Bananas</Text>
            <Text style={styles.itemQuantity}>12pcs, Price</Text>
          </View>
          <Text style={styles.itemPrice}>$3.00</Text>
        </View>

        <View style={styles.cartItem}>
          <Text style={styles.itemEmoji}>🫚</Text>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Ginger</Text>
            <Text style={styles.itemQuantity}>250g, Price</Text>
          </View>
          <Text style={styles.itemPrice}>$2.99</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#181725',
  },
  itemList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingVertical: 15,
  },
  itemEmoji: {
    fontSize: 32,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  button: {
    backgroundColor: '#53B175',
    padding: 18,
    borderRadius: 19,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});