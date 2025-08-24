
import React from "react";
import { ScrollView, View, Text, Button, StyleSheet, Linking } from "react-native";

const PHONE = "916376749479"; // 91 + your number
const WA_MSG = encodeURIComponent(
  "Namaste Jay Gurudev Mobile! Mujhe product ke baare me jankari/booking chahiye."
);

export default function ProductsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📱 Jay Gurudev Mobile</Text>
      <Text style={styles.text}>
        🏠 Address: Krpa Sagar Society ke samne, Mansarovar Road, Chandkheda, Ahmedabad
      </Text>
      <Text style={styles.text}>📞 Phone: 6376749479</Text>
      <Text style={styles.text}>🕙 Timings: 10:00 AM – 9:40 PM</Text>

      <Text style={styles.section}>Products</Text>
      <View style={styles.card}>
        <Text style={styles.prod}>🎧 Neckband</Text>
        <Text>Price: ₹800</Text>
        <Text>Warranty: 1 Year</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.prod}>🔌 Charger (Type-C to Type-C, 45W)</Text>
        <Text>Price: ₹900</Text>
        <Text>Warranty: 1 Year</Text>
      </View>

      <Text style={styles.section}>Return / Exchange Policy</Text>
      <Text style={styles.note}>
        • Open/used product return nahi hoga.{"\n"}
        • 1 din ke andar sirf exchange possible hai.{"\n"}
        • Exchange me agar naya product mehenga ho to difference customer pay karega.
      </Text>

      <View style={{ marginTop: 16 }}>
        <Button
          title="WhatsApp par Order/Query bheje"
          onPress={() => Linking.openURL(`https://wa.me/${PHONE}?text=${WA_MSG}`)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 6 },
  text: { fontSize: 14, marginBottom: 4 },
  section: { fontSize: 18, fontWeight: "600", marginTop: 16, marginBottom: 6 },
  card: { padding: 10, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 8 },
  prod: { fontSize: 16, fontWeight: "500", marginBottom: 4 },
  note: { fontSize: 13, color: "gray" }
});
