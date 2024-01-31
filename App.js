import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Login from "./components/Login";
import Registr from "./components/Registr";
import GoalHotel from "./components/GoalHotel";
import Hotels from "./components/Hotels";
import Profile from "./components/Profile";
import ChoosingImg from "./components/ChoosingImg";
import { useDispatch, useSelector } from "react-redux";

import store from "./store/store";

export default function App() {
  const categories = [
    { name: "Отель", component: GoalHotel, isHeaderBack: true },
    { name: "Отели", component: Hotels, isHeaderBack: false },
    { name: "Регистрация", component: Registr, isHeaderBack: true },
    { name: "Выберите аватарку", component: ChoosingImg, isHeaderBack: false },
    { name: "Профиль", component: Profile, isHeaderBack: true },
  ];
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Вход" component={Login} />
          {categories.map((i, k) => {
            return (
              <Stack.Screen
                key={k}
                name={i.name}
                component={i.component}
                options={{ headerBackVisible: i.isHeaderBack }}
              ></Stack.Screen>
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
  },
  title: {
    fontSize: 20,
  },
});
