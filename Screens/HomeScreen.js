import { FlatList, StyleSheet, Text, View } from 'react-native';
import Colors from '../helper/GlobalColors';
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import GlobalStyles from '../helper/GlobalStyles';
import SearchWithButton from '../components/SearchWithButton';
import ImageContainer from '../components/ImageContainer';
import { CoffeeItems } from '../data/dummy-data';
import CoffeeItem from '../components/CoffeItem';


function HomeScreen() {
  const authCtx = useContext(AuthContext);

  const renderCoffe = (itemData) => {
    return <CoffeeItem  title={itemData.item.name} imageUrl={itemData.item.image} startRating={itemData.item.rating} id={itemData.item.id}/>
  }

  return (
    <>
      <View style={styles.rootContainer}>
        <Text style={[GlobalStyles.nameText, styles.welcomeText]}>Welcome <Text style={{color: Colors.color_4}}>{authCtx?.name || 'Guest'}</Text></Text>
        <View style={styles.searchContainer}>
          <SearchWithButton />
        </View>

        <View style={GlobalStyles.imageContainer}>
          <ImageContainer imageUrl="https://cdn.create.vista.com/downloads/40960891-8c60-42f0-a6e9-8657041fd1c2_1024.jpeg" />
        </View> 
      </View>

      <View style={styles.flexContainer}>
            <FlatList data={CoffeeItems} keyExtractor={(item)=> item.id} renderItem={renderCoffe} numColumns={2}></FlatList>
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.color_6,
    
  },
  welcomeText: {
    color: Colors.color_1,
    padding: 0,
    margin: 0,
  },
  searchContainer: {
    padding: 15,
  },
  
  
  flexContainer: {
  
    flex: 2,
    marginTop: 65
  },
});
