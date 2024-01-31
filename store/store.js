import { createStore } from "redux";
import hotel0 from "../assets/pics/hotel0.jpg";
import hotel1 from "../assets/pics/hotel1.jpg";
import hotel2 from "../assets/pics/hotel2.jpg";
import hotel3 from "../assets/pics/hotel3.jpg";
import hotel4 from "../assets/pics/hotel4.jpg";
import hotel5 from "../assets/pics/hotel5.jpg";
import hotel6 from "../assets/pics/hotel6.jpg";
import hotel7 from "../assets/pics/hotel7.jpg";
import hotel8 from "../assets/pics/hotel8.jpg";
import hotel9 from "../assets/pics/hotel9.jpg";
import hotel10 from "../assets/pics/hotel10.jpg";
import hotel11 from "../assets/pics/hotel11.jpg";
import hotel12 from "../assets/pics/hotel12.jpg";
import hotel13 from "../assets/pics/hotel13.jpg";
import hotel14 from "../assets/pics/hotel14.jpg";
import lion from "./../assets/pics/Avatars/lion.png";
import wolf from "./../assets/pics/Avatars/wolf.png";
import tiger from "./../assets/pics/Avatars/tiger.png";
import cat from "./../assets/pics/Avatars/cat.png";
import raccoon from "./../assets/pics/Avatars/raccoon.png";
import dog from "./../assets/pics/Avatars/dog.png";
import bear from "./../assets/pics/Avatars/bear.png";
import giraffe from "./../assets/pics/Avatars/giraffe.png";

const defaultState = {
  personalData: {
    login: "1",
    password: "",
  },
  images: [lion, wolf, tiger, raccoon, cat, dog, bear, giraffe],
  favorites: [],
  img: lion,
  goalHotel: "",
  hotels: [
    {
      img: hotel0,
      name: "SUPER HOTEL",
      stars: 3,
      priceFrom: 10,
      id: 0,
      isFavorite: false,
      reviews: [
        { name: "Дмитрий", review: "Неплохо", grade: 7 },
        { name: "Алексей", review: "Топ за свои деньги", grade: 10 },
        { name: "Ксения", review: "Дешево, но очень грязно", grade: 5 },
      ],
    },
    {
      img: hotel1,
      name: "HOT hotel",
      stars: 5,
      priceFrom: 12,
      id: 1,
      isFavorite: false,
      reviews: [
        { name: "Петр", review: "Отличное место для отдыха.", grade: 9 },
        { name: "Анна", review: "Прекрасный отель, рекомендую.", grade: 10 },
        { name: "Ольга", review: "Чисто и уютно.", grade: 8 },
        { name: "Иван", review: "Хорошее обслуживание.", grade: 7 },
        { name: "Екатерина", review: "Приятный персонал.", grade: 9 },
        { name: "Username", review: "Не помню", grade: 4 },
      ],
    },
    {
      img: hotel2,
      name: "Western Hotel",
      stars: 5,
      priceFrom: 32,
      id: 2,
      isFavorite: false,
      reviews: [
        { name: "Дмитрий", review: "Прекрасный вид из окна.", grade: 10 },
        { name: "Ольга", review: "Отличное местоположение.", grade: 9 },
        { name: "Андрей", review: "Завтрак был великолепным.", grade: 10 },
      ],
    },
    {
      img: hotel3,
      name: "Miss Marry",
      stars: 4,
      priceFrom: 15,
      id: 3,
      isFavorite: false,
      reviews: [
        { name: "Екатерина", review: "Средний отель за свою цену.", grade: 6 },
        { name: "Сергей", review: "Много шума из-за дороги.", grade: 5 },
        { name: "Мария", review: "Чисто, но старое оборудование.", grade: 7 },
      ],
    },
    {
      img: hotel4,
      name: "Empire Hotel",
      stars: 3,
      priceFrom: 20,
      id: 4,
      isFavorite: false,
      reviews: [
        {
          name: "Анна",
          review: "Понравилось местоположение, но шумно ночью было.",
          grade: 6,
        },
        { name: "Игорь", review: "Приветливый персонал.", grade: 9 },
        { name: "Максим", review: "С админом хорошо выпили.", grade: 7 },
        {
          name: "Наталья",
          review: "Спасибо за хорошее обслуживание, но напитки у вас ужасные.",
          grade: 6,
        },
      ],
    },
    {
      img: hotel6,
      name: "Ice Hotel",
      stars: 3,
      priceFrom: 80,
      id: 6,
      isFavorite: false,
      reviews: [
        { name: "Марина", review: "Холодно.", grade: 7 },
        { name: "Денис", review: "Необычный отель для ночлега.", grade: 6 },
        { name: "Татьяна", review: "Оригинально, но нет Wi-Fi.", grade: 6 },
        { name: "Сергей", review: "Странное месторасположение.", grade: 8 },
      ],
    },
    {
      img: hotel5,
      name: "ASD HOTEL",
      stars: 5,
      priceFrom: 200,
      id: 5,
      isFavorite: false,
      reviews: [
        {
          name: "Олег",
          review: "Очень красивый вид.",
          grade: 10,
        },
        { name: "Наталья", review: "Великолепный вид из номера.", grade: 10 },
      ],
    },
    {
      img: hotel7,
      name: "MA MA",
      stars: 4,
      priceFrom: 70,
      id: 7,
      isFavorite: false,
      reviews: [
        {
          name: "Иван",
          review: "Уютное место, отличный сервис.",
          grade: 9,
        },
        {
          name: "Анна",
          review: "Отличное расположение, все рядом.",
          grade: 8,
        },
        {
          name: "Михаил",
          review: "Чисто и комфортно, приветливый персонал.",
          grade: 9,
        },
      ],
    },
    {
      img: hotel8,
      name: "Meinburg",
      stars: 4,
      priceFrom: 150,
      id: 8,
      isFavorite: false,
      reviews: [
        {
          name: "Екатерина",
          review: "Прекрасный отдых, все было идеально.",
          grade: 10,
        },
        {
          name: "Дмитрий",
          review: "Хороший выбор для семейного отдыха.",
          grade: 8,
        },
      ],
    },
    {
      img: hotel9,
      name: "Green Island",
      stars: 2,
      priceFrom: 30,
      id: 9,
      isFavorite: false,
      reviews: [
        {
          name: "Екатерина",
          review: "Прекрасный отдых, все было идеально.",
          grade: 10,
        },
        {
          name: "Дмитрий",
          review: "Хороший выбор для семейного отдыха.",
          grade: 8,
        },
      ],
    },
    {
      img: hotel10,
      name: "Viesnica",
      stars: 4,
      priceFrom: 60,
      id: 10,
      isFavorite: false,
      reviews: [
        {
          name: "Сергей",
          review: "Хорошее место, но очень холодно.",
          grade: 8,
        },
        {
          name: "Ольга",
          review:
            "Спасибо за хорошее обслуживание. Единственный минус - завтраки холодные.",
          grade: 9,
        },
      ],
    },
    {
      img: hotel11,
      name: "Arista HOTEL",
      stars: 3,
      priceFrom: 50,
      id: 11,
      isFavorite: false,
      reviews: [
        {
          name: "Светлана",
          review: "Отличный отель, понравилась атмосфера.",
          grade: 9,
        },
        {
          name: "Алексей",
          review: "Вежливый персонал, удобные номера.",
          grade: 7,
        },
      ],
    },
    {
      img: hotel12,
      name: "Arista HOTEL",
      stars: 3,
      priceFrom: 50,
      id: 12,
      isFavorite: false,
      reviews: [
        {
          name: "Светлана",
          review: "Отличный отель, понравилась атмосфера.",
          grade: 9,
        },
        {
          name: "Алексей",
          review: "Вежливый персонал, удобные номера.",
          grade: 7,
        },
      ],
    },
    {
      img: hotel13,
      name: "RIXOS",
      stars: 4,
      priceFrom: 80,
      id: 13,
      isFavorite: false,
      reviews: [
        {
          name: "Алексей",
          review: "Отель не советую, персонал грубияны",
          grade: 3,
        },
        {
          name: "Григорий",
          review: "Все неплохо, за исключением админа.",
          grade: 7,
        },
      ],
    },
    {
      img: hotel14,
      name: "Elefant Hotel",
      stars: 5,
      priceFrom: 200,
      id: 14,
      isFavorite: false,
      reviews: [
        {
          name: "Олег",
          review: "Роскошный отель с отличным сервисом.",
          grade: 10,
        },
        { name: "Наталья", review: "Великолепный вид из номера.", grade: 10 },
      ],
    },
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_PERSONALDATA":
      return {
        ...state,
        personalData: {
          ...state.personalData,
          ...action.payload,
        },
      };
    case "UPDATE_GOALHOTEL":
      return {
        ...state,
        goalHotel: action.payload,
      };
    case "UPDATE_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        hotels: state.hotels.map((hotel) =>
          hotel.id === action.payload.id
            ? { ...hotel, isFavorite: action.payload.isFavorite }
            : hotel
        ),
      };
    case "UPDATE_IMG":
      return {
        ...state,
        img: action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
