import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../helper/GlobalColors";
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from "../helper/GlobalStyles";
import IconicButton from "./IconicButton";

const CoffeeItem = ({ title, imageUrl, startRating }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => console.log(`${title} clicked!`)} // Example press handler
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <View style={styles.ratingContainer}>
            <Text style={[GlobalStyles.nameText, {color: Colors.color_6}]}>{startRating}</Text>
            <Ionicons name="star-sharp" size={20} color={Colors.color_7} />
          </View>
          <TouchableOpacity style={styles.addIconContainer}>
            <Ionicons name="arrow-forward-circle" size={24} color={Colors.color_5} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    padding: 8,
    backgroundColor: Colors.color_5,
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 128,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  addIconContainer: {
    backgroundColor: Colors.color_1,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
