import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import GlobalStyles from '../helper/GlobalStyles';
import Colors from '../helper/GlobalColors';

const SearchWithButton = () => {

    return <>
    <View style={GlobalStyles.textInputContainer}>
          <TextInput style={GlobalStyles.input} placeholder="Search" placeholderTextColor="#777" autoCorrect={false}/>
          <Ionicons name="search" size={28} color={Colors.color_6} style={[GlobalStyles.icon]} />
    </View>
    </>

}
export default SearchWithButton;