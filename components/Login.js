import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import loadingPict from "./../assets/pics/loading.png";
import closedEye from "../assets/pics/closedEye.png";
import openedEye from "../assets/pics/openedEye.png";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

export default function App({ navigation }) {
  const img = useSelector((state) => state.img);
  const loadingItem = useRef(new Animated.Value(0)).current;
  const formItem = useRef(new Animated.Value(1)).current;
  const dispatch = useDispatch();
  const [loadingDisplay, setloadDisplay] = useState({
    marginTop: 100,
    display: "none",
  });
  const loadingAnim = () => {
    Animated.timing(loadingItem, {
      toValue: 1,
      duration: 300000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const interpolateLoading = loadingItem.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "36000deg"],
  });
  const loadingStyle = {
    transform: [{ rotate: interpolateLoading }],
  };
  const opacitiyAnim = () => {
    Animated.timing(formItem, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start(loadingAnim);
  };

  const personalData = useSelector((state) => state.personalData);
  const [isShowingPass, setShowing] = useState(true);
  const [passPict, setPict] = useState(openedEye);
  function logIn() {
    if (log.length > 0 && pas.length > 0) {
      if (personalData.login == log && personalData.password == pas) {
        opacitiyAnim();
        setTimeout(() => {
          setloadDisplay((prevState) => ({ ...prevState, display: "flex" }));
          setTimeout(() => {
            navigation.navigate("Отели");
          }, 1500);
        }, 1500);
      } else {
        alert("Неправильный логин или пароль");
        setPas("");
        setLog("");
      }
    } else {
      alert("Поля должны быть заполнены");
    }
  }

  const [log, setLog] = useState("");
  const [pas, setPas] = useState("");
  const changeShowState = () => {
    if (isShowingPass) {
      setShowing(false);
      setPict(closedEye);
      return;
    }
    setShowing(true);
    setPict(openedEye);
  };
  const trimLog = (text) => {
    console.log(log);
    if (!text.includes(" ")) {
      setLog(text);
    }
  };
  const trimPas = (text) => {
    if (!text.includes(" ")) {
      setPas(text);
    }
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        source={loadingPict}
        style={StyleSheet.compose(loadingDisplay, loadingStyle)}
      ></Animated.Image>
      <Animated.View
        style={StyleSheet.compose(
          {
            opacity: formItem,
          },
          styles.formContainer
        )}
      >
        <View style={styles.title}>
          <Image
            source={{ uri: "https://img.icons8.com/color/48/h-cute.png" }}
          ></Image>
        </View>
        <TextInput
          placeholder="Login"
          style={[styles.input, { paddingRight: 20 }]}
          value={log}
          onChangeText={(val) => trimLog(val)}
        ></TextInput>
        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Password"
            style={[styles.input, { paddingRight: 50 }]}
            secureTextEntry={isShowingPass}
            value={pas}
            onChangeText={(val) => trimPas(val)}
          ></TextInput>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 10,
              top: "30%",
            }}
            onPress={changeShowState}
          >
            <Image source={passPict} style={{}}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={logIn} style={styles.btnWrap}>
          <Text style={styles.btn}>Войти</Text>
        </TouchableOpacity>
        <View style={styles.regWrap}>
          <Text>Нет аккаунта?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Регистрация")}>
            <Text style={{ color: "blue" }}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
    gap: 40,
  },
  input: {
    borderWidth: 2,
    paddingVertical: 10,
    paddingLeft: 15,
    fontSize: 25,
    borderColor: "orange",
    width: 250,
    borderRadius: 10,
  },
  btnWrap: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  btn: {
    fontSize: 25,
    textAlign: "center",
  },
  regWrap: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
});
