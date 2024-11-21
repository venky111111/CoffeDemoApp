import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const image = {uri: 'https://img.freepik.com/free-photo/cup-with-spoon-near-coffee-beans_23-2148180230.jpg?t=st=1731648288~exp=1731651888~hmac=3674ba01388affe2e62b435a896fc024d7974f4339628d294388bf8b474f4231&w=360'};

const BgImage = ({children}) => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
 
});

export default BgImage;