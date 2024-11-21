import React from "react";
import { View } from "react-native";
const HorizentalLine = ({color,borderwidth,marginvertical,width,height,borderRadius}) => {
    return (
        <View style={{ borderBottomColor:color, borderBottomWidth:borderwidth, marginVertical:marginvertical,  height:height, width:width, borderRadius:borderRadius }} />
    )
}
export default HorizentalLine;