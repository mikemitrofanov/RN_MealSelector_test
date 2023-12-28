import {StyleSheet, View, Text, FlatList} from "react-native";
import { Meals } from "../data/dummy-data";
import { useRoute } from '@react-navigation/native';
import Meal from "../models/meal";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsScreen({ route, navigation }) {
  const { params: { categoryId, categoryTitle } } = route;
  
  useLayoutEffect(() => { navigation.setOptions({ title: categoryTitle }) }, []);
  const filtered = Meals.filter((item) => item.categories.includes(categoryId));
  
  return (
    <View style={styles.container}>
      <FlatList
        data={filtered}
        keyExtractor={(item: Meal) => item.id}
        renderItem={(itemData) =>
          <MealItem
            meal={itemData.item}
          />
        }
      />
    </View>
  )
}

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});