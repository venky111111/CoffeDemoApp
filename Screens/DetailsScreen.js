import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CoffeeItems } from "../data/dummy-data";
import GlobalStyles from '../helper/GlobalStyles';
import Colors from '../helper/GlobalColors';
import { Ionicons } from '@expo/vector-icons';
import ButtonComponent from '../components/ButtonComponent';
import { useNavigation } from "@react-navigation/native";
const DetailsScreen = () => {
  const route = useRoute();
  const { CoffeItemId } = route.params; 
  const navigation = useNavigation();


  const displayCoffe = CoffeeItems.filter((coffeItem) => coffeItem.id === CoffeItemId);

  return (
    
    <View style={GlobalStyles.container1} >
    <ScrollView>
      {displayCoffe.length > 0 ? (
        displayCoffe.map((item) => (
          <View key={item.id}>
                <Image source = {{uri: item.image}} style={styles.image} />
                <Text style={[GlobalStyles.title, { fontSize: 22, color: Colors.color_1}]}>{item.name}</Text>
                <View style={[GlobalStyles.textInputContainer, GlobalStyles.row]}>
                    <Text style={[GlobalStyles.title, {fontSize: 14}]}>{item.type}</Text>
                    <Text style={[GlobalStyles.title, {fontSize: 14}]}>{item.offPercentage}% OFF</Text>
                    <View style={GlobalStyles.ratingContainer}>
                        <Text style={[GlobalStyles.title, {color: Colors.color_6}]}>{item.rating}</Text>
                        <Ionicons name="star-sharp" size={22} color={Colors.color_7} />
                    </View>
                    <Text style={[GlobalStyles.title, {fontSize: 14}]}>{item.caffeineContent}</Text>

                </View>
                <View>
                    <Text style={[GlobalStyles.title, {textAlign: 'start',  color: Colors.color_1}]}>Description: </Text>
                    <Text style={[GlobalStyles.subText, {color: Colors.color_6,textAlign: 'start' }]}>{item.description}</Text>
                </View>
                <View style={[GlobalStyles.row]}>
                {['S', 'M', 'L'].map(size => (
                  <View key={size} style={[GlobalStyles.textInputContainer,{width: '30%', justifyContent: 'center'}]}>
                    <Text style={GlobalStyles.title}>{size}</Text>
                  </View>
                ))}
              </View>
          </View>

        ))
      ) : (
        <Text style={styles.errorText}>Item not found.</Text>
      )}
      
      </ScrollView>
      <View style={[GlobalStyles.row,{marginHorizontal: 20,position: 'fixed',bottom: 0}]}>
        <Text style={GlobalStyles.title}>Price: {displayCoffe[0].price} Rs</Text>
          <ButtonComponent onPress={() => navigation.replace('CheckOutScreen', { CoffeItemId: displayCoffe[0].id})}  backgroundColor={Colors.color_1} width='45%' style={{marginBottom: 0}}>Buy Now</ButtonComponent>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "cover",
  },
  itemContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  sizeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sizeButton: {
    backgroundColor: Colors.color_5,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '30%',
    borderColor: '#ddd',
  },
});

export default DetailsScreen;
