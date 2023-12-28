import {StyleSheet, View, Text, Image} from "react-native";
import { Meals } from "../data/dummy-data";

function MealDetailsScreen({ route }) {
  const { params: { mealId } } = route;
  const {
    imageUrl, title, duration, complexity, affordability, steps, ingredients
  } = Meals.find(item => item.id === mealId);
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
  
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity}</Text>
        <Text style={styles.detailItem}>{affordability}</Text>
      </View>
      
      <Text style={styles.subtitle}>Ingredients</Text>
      {ingredients.map(item => <Text key={item}>{item}</Text>)}
      <Text style={styles.subtitle}>Steps</Text>
      {steps.map(item => <Text key={item}>{item}</Text>)}
    </View>
  )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
  
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
  
  subtitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 6
  }
});