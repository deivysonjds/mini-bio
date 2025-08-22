import { View } from "react-native";
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
      <h1 style={{width:550, textAlign:"center"}}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </h1>
      <Profile/>
    </View>
  );
}
