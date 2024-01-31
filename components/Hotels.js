import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import star from "./../assets/pics/star.png";
import favorite from "./../assets/pics/favorite.png";
import notFavorite from "./../assets/pics/notFavorite.png";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);
  const favorites = useSelector((state) => state.favorites);
  const avatar = useSelector((state) => state.img);
  useEffect(() => {}, [favorites]);
  const toHotel = (id) => {
    dispatch({ type: "UPDATE_GOALHOTEL", payload: id });
    navigation.navigate("Отель");
  };
  const addToFavorite = (id) => {
    const hotel = hotels.find((hotel) => hotel.id === id);

    if (hotel) {
      const indexInFavorites = favorites.findIndex(
        (favHotel) => favHotel.id === id
      );

      if (indexInFavorites !== -1) {
        console.log(id);
        dispatch({
          type: "TOGGLE_FAVORITE",
          payload: { id, isFavorite: false },
        });
        dispatch({
          type: "REMOVE_FROM_FAVORITES",
          payload: hotel,
        });
      } else {
        dispatch({
          type: "TOGGLE_FAVORITE",
          payload: { id, isFavorite: true },
        });
        dispatch({
          type: "UPDATE_FAVORITES",
          payload: hotel,
        });
      }
    }
  };
  const toProfile = () => {
    navigation.navigate("Профиль");
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <TouchableOpacity onPress={toProfile}>
            <Image source={avatar}></Image>
          </TouchableOpacity>
        </View>
        {hotels.map((i, k) => {
          return (
            <View style={styles.hotelItem} key={k}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                }}
              >
                <Text style={styles.hotelName}>{i.name}</Text>

                <TouchableOpacity onPress={() => addToFavorite(i.id)}>
                  <Image source={i.isFavorite ? favorite : notFavorite}></Image>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => toHotel(i.id)}>
                <Image style={styles.image} source={i.img}></Image>
              </TouchableOpacity>

              <View style={styles.starsContainer}>
                {Array.from({ length: i.stars }).map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    style={styles.starImage}
                    source={star}
                  />
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },

  title: {
    fontSize: 20,
  },

  hotelItem: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    gap: 20,
    borderRadius: 10,
  },
  hotelName: {
    fontSize: 25,
    fontFamily: "Roboto",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});
