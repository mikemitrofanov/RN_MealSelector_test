import {StyleSheet, View, Text, FlatList} from "react-native";
import { Meals } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsScreen({ route, navigation }) {
  const { params: { categoryId, categoryTitle } } = route;
  
  useLayoutEffect(() => { navigation.setOptions({ title: categoryTitle }) }, []);
  const filtered = Meals.filter((item) => item.categories.includes(categoryId));
  
  return <MealsList data={filtered} />
}

export default MealsScreen;

const styles = StyleSheet.create({});