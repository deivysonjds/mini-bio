import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    text: {
        textAlign:"center",
        margin: 6
    },
    strong: {
        textAlign:"center",
        fontWeight:"bold",
        margin: 15
    }
})
export default function Profile(){

    return (
        <View style={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            flexDirection: "column",
            width: "80%"
        }}>
            <Image source={require("../../assets/images/perfil.jpeg")} style={{width:200, height:300, borderRadius:10}}/>
            <Text style={styles.strong}>
                Deivyson j.
            </Text>
            <Text style={styles.text}>
                desenvolvedor FullStack e RPA
            </Text>
            <Text style={styles.text}>
                Estudante de sistemas para internet pela Unicap
            </Text>
            <Text style={styles.text}>
                Apaixonado por tecnologia e filosofia
            </Text>
        </View>
    )
}