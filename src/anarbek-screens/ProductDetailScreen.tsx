import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  ScrollView, StyleSheet, Alert
} from 'react-native';

export default function ProductDetailScreen() {
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const price = 4.99;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageArea}>
          <Text style={styles.back}>‹</Text>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=700'
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.body}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>Natural Red Apple</Text>
              <Text style={styles.subtitle}>1kg, Price</Text>
            </View>
            <TouchableOpacity
              onPress={() => setFavorite(!favorite)}
            >
              <Text style={styles.heart}>
                {favorite ? '♥' : '♡'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.quantityRow}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.control}>−</Text>
            </TouchableOpacity>

            <View style={styles.quantityBox}>
              <Text style={styles.quantity}>{quantity}</Text>
            </View>

            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>

            <Text style={styles.price}>
              ${(price * quantity).toFixed(2)}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Text style={styles.description}>
              Apples are nutritious. They may be good for weight
              loss and your heart. Fresh and delicious natural
              red apples.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <Text style={styles.description}>100gr</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Review</Text>
            <Text style={styles.stars}>★★★★★</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert('Success', `${quantity} apple added to basket!`)
        }
      >
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 110,
  },
  imageArea: {
    height: 330,
    backgroundColor: '#F2F3F2',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
  },
  back: {
    fontSize: 36,
    color: '#181725',
  },
  image: {
    width: '100%',
    height: 250,
  },
  body: {
    padding: 22,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
  },
  subtitle: {
    color: '#7C7C7C',
    marginTop: 5,
  },
  heart: {
    fontSize: 32,
    color: '#53B175',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
    gap: 15,
  },
  control: {
    fontSize: 30,
    color: '#B3B3B3',
  },
  plus: {
    fontSize: 30,
    color: '#53B175',
  },
  quantityBox: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginLeft: 'auto',
    fontSize: 23,
    fontWeight: 'bold',
  },
  section: {
    borderTopWidth: 1,
    borderColor: '#E2E2E2',
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 20,
  },
  stars: {
    color: '#F3603F',
    fontSize: 23,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#53B175',
    height: 60,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
