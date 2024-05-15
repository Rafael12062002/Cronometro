import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type ButtomProps = TouchableOpacityProps &{
    textButtom:string
    style?: StyleProp<ViewStyle>//Props para estilo adicionais
}