import {FlatList, StyleSheet, View} from "react-native";
import Meal from "../../models/meal";
import MealItem from "./MealItem";

function MealsList({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});