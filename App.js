import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📱 Jay Gurudev Mobile</Text>
      <Text style={styles.text}>Address: Krpa Sagar Society, Mansarovar Road, Chandkheda, Ahmedabad</Text>
      <Text style={styles.text}>Phone: 6376749479</Text>
      <Text style={styles.text}>Timings: 10:00 AM - 9:40 PM</Text>

      <Text style={styles.subtitle}>Products</Text>
      <Text style={styles.text}>🎧 Neckband - ₹800 (With Warranty)</Text>
      <Text style={styles.text}>🔌 Charger - ₹900 (With Warranty)</Text>

      <Button
        title="Order on WhatsApp"
        onPress={() => {
          alert("Order system baad me connect hoga 🚀");
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
