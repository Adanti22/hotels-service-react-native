import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const img = useSelector((state) => state.img);

  function toLogIn(picture) {
    dispatch({ type: "UPDATE_IMG", payload: picture });
    console.log(img);
    navigation.navigate("Вход");
  }

  return (
    <View style={styles.container}>
      {images.map((i, k) => {
        return (
          <TouchableOpacity onPress={() => toLogIn(i)} key={k}>
            <Image style={styles.img} source={i}></Image>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
    justifyContent: "center",
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  formContainer: {},
  img: { width: 110, height: 110 },
  title: {
    fontSize: 20,
  },
});
