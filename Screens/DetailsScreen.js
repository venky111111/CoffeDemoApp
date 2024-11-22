import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CoffeeItems } from "../data/dummy-data";
import GlobalStyles from '../helper/GlobalStyles';
import Colors from '../helper/GlobalColors';
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from '../components/ButtonComponent';

const DetailsScreen = () => {
  const route = useRoute();
  const { CoffeItemId } = route.params;
  const navigation = useNavigation();

  const displayCoffe = CoffeeItems.find((coffeItem) => coffeItem.id === CoffeItemId);

  if (!displayCoffe) {
    return (
      <View style={[GlobalStyles.container1, styles.center]}>
        <Text style={[GlobalStyles.title, styles.errorText]}>
          Item not found.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={GlobalStyles.container1}>
          <Image source={{ uri: displayCoffe.image }} style={styles.image} />
          <Text style={[GlobalStyles.title, { fontSize: 22, color: Colors.color_1 }]}>
            {displayCoffe.name}
          </Text>
          <View style={[styles.detailsRow, GlobalStyles.row]}>
            <Text style={[GlobalStyles.title, styles.detailText]}>{displayCoffe.type}</Text>
            <Text style={[GlobalStyles.title, styles.detailText]}>
              {displayCoffe.offPercentage}% OFF
            </Text>
            <View style={GlobalStyles.ratingContainer}>
              <Text style={[GlobalStyles.title, { color: Colors.color_6 }]}>
                {displayCoffe.rating}
              </Text>
              <Ionicons name="star-sharp" size={22} color={Colors.color_7} />
            </View>
            <Text style={[GlobalStyles.title, styles.detailText]}>
              {displayCoffe.caffeineContent}
            </Text>
          </View>
          <View>
            <Text style={[GlobalStyles.title, { textAlign: 'left', color: Colors.color_1 }]}>
              Description:
            </Text>
            <Text style={[GlobalStyles.subText, styles.description]}>
              {displayCoffe.description}
            </Text>
          </View>
          <View style={[GlobalStyles.row, styles.sizeSelectionContainer]}>
            {['S', 'M', 'L'].map((size) => (
              <View key={size} style={styles.sizeButton}>
                <Text style={GlobalStyles.title}>{size}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={[styles.footer, GlobalStyles.row]}>
        <Text style={[GlobalStyles.title, { color: Colors.color_5 }]}>
          Price: {displayCoffe.price} Rs
        </Text>
        <ButtonComponent
          onPress={() => navigation.replace('CheckOutScreen', { CoffeItemId: displayCoffe.id })}
          backgroundColor={Colors.color_6}
          width="37%"
        >
          Buy Now
        </ButtonComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "cover",
  },
  detailsRow: {
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.color_5,
    paddingVertical: 12,
    borderRadius: 10,
    alignContent: 'center',
    borderColor: Colors.color_2,
    borderWidth: 1
  },
  detailText: {
    fontSize: 14,
    color: Colors.color_8,
    marginHorizontal: 5,
  },
  description: {
    color: Colors.color_6,
    textAlign: 'left',
    marginTop: 5,
    lineHeight: 20,
  },
  sizeSelectionContainer: {
    marginTop: 15,
    justifyContent: 'space-between',
  },
  sizeButton: {
    backgroundColor: Colors.color_5,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '30%',
    borderColor: Colors.color_2,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: Colors.color_1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default DetailsScreen;
