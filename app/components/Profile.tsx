import { Image, Text, View } from "react-native";

export default function Profile(){

    return (
        <View>
            <Image source={require("../../assets/images/perfil.jpeg")} style={{width:200, height:300, borderRadius:10}}/>
            <Text 
                style={{
                    margin:3
                }}>
                Deivyson j.
            </Text>
            <Text>
                desenvolvedor FullStack e RPA
            </Text>
            <Text>
                Estudante de sistemas para internet pela Unicap
            </Text>
            <Text>
                Apaixonado por tecnologia e filosofia
            </Text>
        </View>
    )
}