import { Image, View, StyleSheet } from 'react-native';
import GlobalStyles from '../helper/GlobalStyles';

const ImageContainer = ({ imageUrl }) => {
  return (
    <View>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={GlobalStyles.image}
      />
    </View>

  );
};



export default ImageContainer;
