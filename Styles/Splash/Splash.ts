import { PixelRatio, StyleSheet } from "react-native";
import { height } from "../../Components/Dimensions";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(24,26,32,255)',
        alignItems:'center',
        justifyContent:'space-around',
        gap:PixelRatio.getPixelSizeForLayoutSize(10)
    },
    InnerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: height * 0.016,
      },
    text:{
        color:'#FFF',
        fontSize:PixelRatio.getPixelSizeForLayoutSize(10),
        fontFamily:'Roboto-Medium'
    }
})