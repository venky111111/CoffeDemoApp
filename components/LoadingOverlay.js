import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

function LoadingOverlay() {
  return (
    <View style={styles.rootContainer}>
      <Image 
        source={{ uri: 'https://cdn.dribbble.com/users/2520294/screenshots/7209485/media/cf226d98a06282e9cabf5c2f8f6d547f.gif' }} 
        style={styles.image} 
        accessibilityLabel="Loading animation" 
        onError={(error) => console.error('Failed to load GIF:', error.nativeEvent.error)} 
      />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
  },
  
});
