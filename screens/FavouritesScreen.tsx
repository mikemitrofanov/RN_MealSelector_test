import {StyleSheet, Text, View} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import {useContext} from "react";
import {FavouritesContext} from "../store/context/favourites-context";
import {Meals} from "../data/dummy-data";
import {useSelector} from "react-redux";

function FavouritesScreen() {
  // const favouriteContext = useContext(FavouritesContext);
  // const filtered = Meals.filter((item) => favouriteContext.ids.includes(item.id));
  
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const filtered = Meals.filter((item) => favouriteMealIds.includes(item.id));
  
  if (filtered.length === 0) return (
    <View style={styles.container}>
      <Text style={styles.text}>No Favourites</Text>
    </View>
  )
  
  return (
    <MealsList data={filtered} />
  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
});