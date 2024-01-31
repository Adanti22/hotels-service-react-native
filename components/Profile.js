import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import star from "./../assets/pics/star.png";
import favorite from "./../assets/pics/favorite.png";
import notFavorite from "./../assets/pics/notFavorite.png";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
export default function App({ navigation }) {
  const img = useSelector((state) => state.img);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const hotels = useSelector((state) => state.hotels);
  const addToFavorite = (id) => {
    const hotel = hotels.find((hotel) => hotel.id === id);

    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: { id, isFavorite: false },
    });
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: hotel,
    });
  };
  const toHotel = () => {
    navigation.navigate("Отель");
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={img}></Image>
        <Text style={{ fontSize: 23 }}>{login}</Text>
        <Text style={{ fontSize: 30 }}>Избранные отели</Text>
        <ScrollView>
          {favorites.map((i, k) => {
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
                    <Image source={favorite}></Image>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  profile: {
    alignItems: "center",
    paddingTop: 20,
  },
  formContainer: {},
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
