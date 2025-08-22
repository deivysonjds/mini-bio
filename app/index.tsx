import { View } from "react-native";
import Profile from "./components/Profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <Profile/>
    </View>
  );
}
