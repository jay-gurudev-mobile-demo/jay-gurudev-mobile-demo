import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  Linking,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

// ✅ Aapka WhatsApp number (91 + number)
const PHONE = "916376749479";

// Demo products — aap chahe to badal sakte ho
const products = [
  { id: "1", name: "ONE7 Neckband (ON BT-46)", price: 800, note: "65H music, ENC, V5.3, warranty" },
  { id: "2", name: "ONE7 45W Charger (ON CH-77)", price: 900, note: "45W Super Fast 2.0, Type-C to Type-C, warranty" },
  { id: "3", name: "Mobile Cover", price: 200, note: "Multiple models available" },
];

export default function ProductsScreen() {
  // 🛒 Cart
  const [cart, setCart] = useState([]);

  // 📸 Image (camera/gallery se)
  const [image, setImage] = useState(null);

  // 📱 Permissions
  useEffect(() => {
    (async () => {
      const cam = await ImagePicker.requestCameraPermissionsAsync();
      const gal = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (cam.status !== "granted" || gal.status !== "granted") {
        Alert.alert(
          "Permission required",
          "Camera aur gallery permissions on karni hongi."
        );
      }
    })();
  }, []);

  // Gallery se photo
  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  // Camera se photo
  const pickImageFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  // Cart me add
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    Alert.alert("Added to Cart", `${item.name} cart me add ho gaya!`);
  };

  // Offline order (shop pe pickup)
  const orderNow = (item) => {
    Alert.alert(
      "Order Confirmed (Offline)",
      `${item.name} select ho gaya. Customer shop se pickup karega.`
    );
  };

  // WhatsApp order
  const orderOnWhatsApp = (item) => {
    const msg =
      `Namaste Jay Gurudev Mobile!\n` +
      `Product: ${item.name}\n` +
      `Price: ₹${item.price}\n` +
      (item?.note ? `Detail: ${item.note}\n` : "") +
      (image ? `Photo captured: YES (preview app me dekhi)\n` : "") +
      `Order type: Online/Offline (please confirm)\n` +
      `Address pickup: Krpa Sagar Society ke samne, Mansarovar Road, Chandkheda, Ahmedabad\n` +
      `Timing: 10:00 AM - 9:40 PM`;
    const url = `whatsapp://send?phone=${PHONE}&text=${encodeURIComponent(msg)}`;
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "WhatsApp open nahi ho paya.")
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📱 Jay Gurudev Mobile</Text>
      <Text style={styles.text}>🏠 Address: Krpa Sagar Society ke samne, Mansarovar Road, Chandkheda, Ahmedabad</Text>
      <Text style={styles.text}>📞 Phone: 6376749479</Text>
      <Text style={styles.text}>🕙 Timings: 10:00 AM - 9:40 PM</Text>

      <Text style={styles.section}>📸 Product Photo (Camera/Gallery)</Text>
      <View style={styles.row}>
        <View style={styles.rowBtn}><Button title="📸 Take Photo" onPress={pickImageFromCamera} /></View>
        <View style={styles.rowBtn}><Button title="🖼️ Select Photo" onPress={pickImageFromGallery} /></View>
      </View>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 220, borderRadius: 10, marginBottom: 12 }}
        />
      )}

      <Text style={styles.section}>🛍️ Products</Text>
      {products.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.product}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
          {item.note ? <Text style={styles.note}>{item.note}</Text> : null}

          <View style={styles.btnGap}><Button title="🛒 Add to Cart" onPress={() => addToCart(item)} /></View>
          <View style={styles.btnGap}><Button title="🏬 Order (Offline Pickup)" onPress={() => orderNow(item)} /></View>
          <View style={styles.btnGap}><Button title="💬 Order on WhatsApp" onPress={() => orderOnWhatsApp(item)} /></View>
        </View>
      ))}

      <Text style={styles.cartText}>🛍️ Cart Items: {cart.length}</Text>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 4 },
  section: { fontSize: 18, fontWeight: "700", marginTop: 16, marginBottom: 8 },
  row: { flexDirection: "row", gap: 10, marginBottom: 10 },
  rowBtn: { flex: 1 },
  card: { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, marginBottom: 12 },
  product: { fontSize: 17, fontWeight: "600" },
  price: { fontSize: 16, color: "green", marginTop: 2 },
  note: { fontSize: 13, color: "#444", marginTop: 4 },
  btnGap: { marginTop: 6 },
  cartText: { fontSize: 16, fontWeight: "600", textAlign: "center", marginTop: 8 },
});
