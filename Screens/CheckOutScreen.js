import { Image, Text, View, ScrollView } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { CoffeeItems } from "../data/dummy-data";
import GlobalStyles from "../helper/GlobalStyles";
import Colors from "../helper/GlobalColors";
import OutlinedButton from "../components/IconicButton";
import HorizentalLine from "../components/HorizentalLine";
import ButtonComponent from "../components/ButtonComponent";
import { useState } from "react";

const CheckOutScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { CoffeItemId } = route.params;

    const [itemsCount, setItemCount] = useState(1);

    const displayCoffe = CoffeeItems.find((coffeItem) => coffeItem.id === CoffeItemId);

    const deliveryCharges = 40;
    const taxCharges = 10;
    const totalPrice = displayCoffe ? displayCoffe.price * itemsCount + deliveryCharges + taxCharges : 0;

    function editAddress() {
        console.log("Edit Address Pressed");
    }
    function addAddress() {
        console.log("Add Address Pressed");
    }
    function itemsCountAdd() {
        setItemCount((prevCount) => prevCount + 1);
    }
    function itemsCountSub() {
        if (itemsCount > 1) {
            setItemCount((prevCount) => prevCount - 1);
        }
    }

    if (!displayCoffe) {
        return (
            <View style={[GlobalStyles.container1, { justifyContent: "center", alignItems: "center" }]}>
                <Text style={[GlobalStyles.title, { color: Colors.color_8 }]}>
                    Item not found!
                </Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                <View style={[GlobalStyles.container1, { padding: 10 }]}>
                    <Text style={[GlobalStyles.title]}>Delivery Address</Text>
                    <Text style={[GlobalStyles.title, { textAlign: "left" }]}>Mandapeta</Text>
                    <Text style={[GlobalStyles.nameText, { color: Colors.color_8, textAlign: "left" }]}>
                        4, Police Station Rd, 11th ward, Mandapeta, Andhra Pradesh 533308
                    </Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginBottom: 10 }}>
                        <OutlinedButton onPress={editAddress} icon="create" outline={false}>
                            Edit Address
                        </OutlinedButton>
                        <OutlinedButton onPress={addAddress} icon="add-circle" outline={true}>
                            Add Address
                        </OutlinedButton>
                    </View>

                    <HorizentalLine color={Colors.color_2} borderwidth={2} marginvertical={2} width={"100%"} borderRadius={2} />

                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center", justifyContent: "space-around" }}>
                        <Image
                            source={{ uri: displayCoffe.image }}
                            style={[GlobalStyles.imageItem, { width: 100, height: 100, resizeMode: "cover", borderRadius: 10 }]}
                        />
                        <Text style={[GlobalStyles.title, { width: "30%" }]}>{displayCoffe.name}</Text>
                        <View style={{ width: "35%", justifyContent: "center", alignItems: "center" }}>
                            <View style={[GlobalStyles.row]}>
                                <OutlinedButton onPress={itemsCountAdd} icon="add-circle" outline={true} />
                                <Text style={{ marginHorizontal: 10 }}>{itemsCount}</Text>
                                <OutlinedButton onPress={itemsCountSub} icon="remove-circle" outline={false} />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[GlobalStyles.title, {textAlign: 'start',  color: Colors.color_1}]}>Description: </Text>
                        <Text style={[GlobalStyles.subText, {color: Colors.color_6,textAlign: 'start' }]}>{displayCoffe.description}</Text>
                    </View>
                    <View
                        style={{borderWidth: 1,
                            borderRadius: 10,
                            padding: 10,
                            backgroundColor: Colors.color_5,
                            borderColor: Colors.color_2,
                            marginTop: 10,
                        }}
                    >
                        <View style={[GlobalStyles.row, { marginVertical: 5 }]}>
                            <Text style={GlobalStyles.title}>Price:</Text>
                            <Text style={GlobalStyles.title}> {displayCoffe.price} Rs</Text>
                        </View>
                        <View style={[GlobalStyles.row, { marginVertical: 5 }]}>
                            <Text style={GlobalStyles.title}>Delivery Charges:</Text>
                            <Text style={GlobalStyles.title}> {deliveryCharges} Rs</Text>
                        </View>
                        <View style={[GlobalStyles.row, { marginVertical: 5 }]}>
                            <Text style={GlobalStyles.title}>Tax Charges:</Text>
                            <Text style={GlobalStyles.title}> {taxCharges} Rs</Text>
                        </View>
                    </View>
                   
                </View>
            </ScrollView>

            <View style={[GlobalStyles.row, { justifyContent: "space-between", padding: 15, backgroundColor: Colors.color_1 }]}>
                <Text style={[GlobalStyles.title, { color: Colors.color_5 }]}>Total: {totalPrice} Rs</Text>
                <ButtonComponent
                    onPress={() => navigation.replace("CheckOutScreen", { CoffeItemId: displayCoffe.id })}
                    backgroundColor={Colors.color_6}
                    width="45%"
                >
                    Order Now
                </ButtonComponent>
            </View>
        </View>
    );
};

export default CheckOutScreen;
