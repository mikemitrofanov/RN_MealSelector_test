import { Categories } from '../data/dummy-data';
import {ScrollView, StyleSheet, View, FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTyle";

function CategoriesScreen({ navigation }) {
  const pressHandler = (itemData) => navigation.navigate('overview', {
    categoryId: itemData.item.id,
    categoryTitle: itemData.item.title
  });
  
  return (
    <FlatList
      style={styles.screen}
      data={Categories}
      keyExtractor={(itemData) => itemData.id}
      renderItem={(itemData) =>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => pressHandler(itemData)}
        />
      }
      numColumns={2}
    />
  )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
  }
})