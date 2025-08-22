import { Image, Text, View } from "react-native";

export default function Profile(){

    return (
        <View>
            <Image source={{uri:"./assets/images/perfil.jpeg"}} style={{width:200, height:300, borderRadius:10}}/>
            <Text 
                style={{
                    margin:3
                }}>
                Deivyson j.
            </Text>
            <Text>
                FullStack and RPA developer
            </Text>
            <Text>
                Internet system student at Unicap
            </Text>
        </View>
    )
}