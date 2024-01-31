import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import loadingPict from "./../assets/pics/loading.png";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import closedEye from "../assets/pics/closedEye.png";
import openedEye from "../assets/pics/openedEye.png";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
export default function App({ navigation }) {
  const loadingItem = useRef(new Animated.Value(0)).current;
  const formItem = useRef(new Animated.Value(1)).current;
  const dispatch = useDispatch();
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

  const [containerDisplay, setContainerDisplay] = useState({ display: "flex" });

  const [isShowingPass, setShowingPass] = useState(true);
  const [isShowingRep, setShowingRep] = useState(true);
  const [passPict, setPassPict] = useState(openedEye);
  const [repPict, setRepPict] = useState(openedEye);
  const [log, setLog] = useState("");
  const [pas, setPas] = useState("");
  const [rep, setRep] = useState("");
  const personalData = useSelector((state) => state.personalData);
  const changeShowStatePass = () => {
    if (isShowingPass) {
      setShowingPass(false);
      setPassPict(closedEye);
    } else {
      setShowingPass(true);
      setPassPict(openedEye);
    }
  };
  const changeShowStateRep = () => {
    if (isShowingRep) {
      setShowingRep(false);
      setRepPict(closedEye);
    } else {
      setShowingRep(true);
      setRepPict(openedEye);
    }
  };

  const [loadingDisplay, setloadDisplay] = useState({
    marginTop: 100,
    display: "none",
  });

  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  const registr = () => {
    if (log.length > 3 && pas.length > 3) {
      if (pas == rep) {
        dispatch({
          type: "UPDATE_PERSONALDATA",
          payload: { login: log, password: pas },
        });
        opacitiyAnim();
        setTimeout(() => {
          setloadDisplay((prevState) => ({ ...prevState, display: "flex" }));
          setTimeout(() => {
            navigation.navigate("Выберите аватарку");
          }, 1500);
        }, 1500);
      } else {
        alert("Пароли не совпадают");
      }
    } else {
      alert("Пароль и логин должны содержать не менее 4 символов");
    }
  };
  const trimLog = (text) => {
    if (!text.includes(" ")) {
      setLog(text);
    }
  };
  const trimPas = (text) => {
    if (!text.includes(" ")) {
      setPas(text);
    }
  };
  const trimRep = (text) => {
    if (!text.includes(" ")) {
      setRep(text);
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
          styles.formContainer,
          containerDisplay
        )}
      >
        <View style={styles.title}>
          <Image
            source={{ uri: "https://img.icons8.com/color/48/h-cute.png" }}
          ></Image>
        </View>
        <TextInput
          placeholder="Login"
          style={styles.input}
          value={log}
          onChangeText={(text) => trimLog(text)}
        ></TextInput>
        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Password"
            style={[styles.input, { paddingRight: 50 }]}
            secureTextEntry={isShowingPass}
            value={pas}
            onChangeText={(text) => trimPas(text)}
          ></TextInput>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 10,
              top: "30%",
            }}
            onPress={changeShowStatePass}
          >
            <Image source={passPict} style={{}}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Repeat"
            style={[styles.input, { paddingRight: 50 }]}
            secureTextEntry={isShowingRep}
            value={rep}
            onChangeText={(text) => trimRep(text)}
          ></TextInput>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 10,
              top: "30%",
            }}
            onPress={changeShowStateRep}
          >
            <Image source={repPict} style={{}}></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={registr} style={styles.btnWrap}>
          <Text style={styles.btn}>Зарегистрироваться</Text>
        </TouchableOpacity>
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
    gap: 30,
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
    width: 200,
  },
  btn: {
    fontSize: 20,
    textAlign: "center",
  },
  regWrap: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
});
