import { style } from './styles'
import { ButtomProps } from './buttom'
import {TouchableOpacity, View, Text} from "react-native"

function ButtomProximo({
    textButtom,
    ...rest
}:ButtomProps){
    return(
        <View style={style.buttom}>
            <TouchableOpacity style={style.btnArea} {...rest}>
                <Text style={style.textButtom}>{textButtom}</Text>
            </TouchableOpacity>
        </View> 
    )
}
export default ButtomProximo