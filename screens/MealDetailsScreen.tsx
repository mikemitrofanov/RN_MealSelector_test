import {StyleSheet, View, Text, Image, ScrollView, Button} from "react-native";
import { Meals } from "../data/dummy-data";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import {FavouritesContext} from "../store/context/favourites-context";
import {useDispatch, useSelector} from "react-redux";
import { addFavourite, removeFavourite } from '../store/redux/slices/favourites';

function MealDetailsScreen({ route, navigation }) {
  const { params: { mealId } } = route;
  const {
    imageUrl, title, duration, complexity, affordability, steps, ingredients
  } = Meals.find(item => item.id === mealId);
  
  // const favouritesContext = useContext(FavouritesContext);
  // const isFavourite = favouritesContext.ids.includes(mealId);
  const dispatch = useDispatch();
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const isFavourite = favouriteMealIds.includes(mealId);
  
  const headerButtonHandler = () => {
    // isFavourite ?
    //   favouritesContext.removeFavourite(mealId) :
    //   favouritesContext.addFavourite(mealId);
  
    isFavourite ?
      dispatch(removeFavourite({ id: mealId })) :
      dispatch(addFavourite({ id: mealId }));
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton icon={isFavourite ? 'star' : 'star-outline'} color='white' onPress={headerButtonHandler}/>
    })
  }, [navigation, headerButtonHandler]);
  
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
  
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity}</Text>
        <Text style={styles.detailItem}>{affordability}</Text>
      </View>
      
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
      
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32
  },
  
  image: {
    width: '100%',
    height: 350,
  },
  
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    padding: 8
  },
  
  detailItem: {
    fontSize: 12,
    color: 'white'
  },
  
  listOuterContainer: {
    alignItems: 'center'
  },
  
  listContainer: {
    width: '80%',
  }
});