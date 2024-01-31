import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import star from "./../assets/pics/star.png";
import favorite from "./../assets/pics/favorite.png";
import notFavorite from "./../assets/pics/notFavorite.png";
function logIn() {}
export default function App() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);
  const goalId = useSelector((state) => state.goalHotel);
  const favorites = useSelector((state) => state.favorites);

  const i = hotels.find((i) => goalId === i.id);
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
  return (
    <View style={styles.container}>
      <ScrollView style={styles.hotelItem}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 20,
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
            <Image key={starIndex} style={styles.starImage} source={star} />
          ))}
        </View>
        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            Цены от: {i.priceFrom}$
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 25, textAlign: "center" }}>Отзывы</Text>
          {i.reviews.map((review, key) => {
            return (
              <View key={key} style={{ paddingTop: 10, margin: 10, gap: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 20 }}>{review.name}</Text>
                  <Text>Оценка: {review.grade}</Text>
                </View>
                <View>
                  <Text>{review.review}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
// name
// review
// grade

const styles = StyleSheet.create({
  formContainer: {},
  title: {
    fontSize: 20,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },

  hotelItem: {
    marginTop: 20,
    padding: 10,
  },
  hotelName: {
    fontSize: 25,
    fontFamily: "Roboto",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
});
