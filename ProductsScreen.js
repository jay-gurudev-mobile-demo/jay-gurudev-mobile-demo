import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Neckband', price: '₹800', warranty: '1 Year' },
  { id: '2', name: 'Charger', price: '₹900', warranty: '1 Year' },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Jay Gurudev Mobile</Text>
      <Text style={styles.address}>
        Krupa Sagar Society ke samne, Maansarovar Road, Chandkheda Ahmedabad
      </Text>
      <Text style={styles.time}>🕙 Open: 10:00 AM - 9:40 PM</Text>

      <Text style={styles.sectionTitle}>Available Products:</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.product}>{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Warranty: {item.warranty}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Return Policy:</Text>
      <Text style={styles.policy}>
        - Product open hone ke baad return nahi hoga. {"\n"}
        - 1 din ke andar sirf exchange hoga. {"\n"}
        - Agar naya product ki price zyada hai, to customer ko difference pay karna hoga.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  address: { fontSize: 14, color: 'gray', marginBottom: 5 },
  time: { fontSize: 14, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 15 },
  card: { padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginVertical: 5 },
  product: { fontSize: 16, fontWeight: '500' },
  policy: { marginTop: 10, fontSize: 14, color: 'gray' },
});
