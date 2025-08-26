import { Text, View } from "react-native";
import Profile from "./components/Profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Text style={{width:"80%", textAlign:"center", marginBottom:30, fontWeight:"bold"}}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>
      <Profile/>
    </View>
  );
}
