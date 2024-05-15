import { Image, View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { EventSubscriptionVendor } from "react-native/Libraries/vendor/emitter/EventEmitter";

type HomeProps = {
    numero:number
    botao:string
}
function Home(props:HomeProps){

    const [timer, setTimer] = useState<any>(null)// Estado para armazenar o ID do intervalo
    const [number, setNumber] = useState(props.numero)
    const [nameBottom, setNameBottom] = useState(props.botao)
    const [tempo, setTempo] = useState<any>(props.numero)

    function vai(){

        if(timer != null){
            clearInterval(timer)// Limpa o intervalo se existir
            setTimer(null)// Atualiza o estado do timer para null
            console.log(timer)
            setNameBottom("Vai")
        }else{
            const newtimer = setInterval(() => {
                setNumber(prevNumber => prevNumber + 0.1)
            }, 100)
            setTimer(newtimer)// Atualiza o estado do timer com o novo ID de intervalo
            setNameBottom("Parar")
        }
        
    }
    function limpar(){
        if(timer != null){
            clearInterval(timer)
            setTimer(null)
        }
        setTempo(number.toFixed(1))
        setNumber(props.numero)
        setNameBottom("Vai")
        console.log(tempo)
    }
    return(
        <View style={styles.container}>

            <Image source={require('@/assets/cronometro.png')} style={styles.img}/>

            <Text style={styles.timer}>{number.toFixed(1)}</Text>

            <View style={styles.btnArea}>

                <TouchableOpacity style={styles.btn} onPress={vai}>

                    <Text style={styles.btnText}>{nameBottom}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={limpar}>
                    
                    <Text style={styles.btnText}>Limpar</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.areaFinal}>
                <Text style={styles.textoTempo}>Ultimo tempo: {tempo}</Text>
            </View>
        </View>
    )
}
export default Home