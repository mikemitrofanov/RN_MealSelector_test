import {StyleSheet, View, Text, Pressable, Image, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Meal from "../../models/meal";

function MealItem({ meal } : { Meal }) {
  const { id, title, imageUrl, duration, complexity, affordability } = meal;
  const navigation = useNavigation();
  
  const navigateToDetails = () => { navigation.navigate('detail', { mealId: id }); }
  
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        onPress={navigateToDetails}
      >
        <View styles={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image}/>
            <Text style={styles.title }>{title}</Text>
          </View>
          
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 16,
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  
  image: {
    width: '100%',
    height: 200,
  },
  
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    padding: 8
  },
  
  detailItem: {
    fontSize: 12
  },
  
  buttonPressed: {
    opacity: 0.5,
  },
});