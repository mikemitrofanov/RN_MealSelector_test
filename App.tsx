import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer theme={{
        ...DefaultTheme,
        colors: {
          background: '#503422'
        }
      }}>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
        }}>
          <Stack.Screen
            name="categories"
            options={{ title: 'All Categories' }}
            component={CategoriesScreen}
          />
          
          <Stack.Screen
            name="overview"
            // options={{}}
            // options={({ route: { params } }) => ({
            //   title: params.categoryTitle
            // })}
            component={MealsScreen}
          />
          
          <Stack.Screen
            name="detail"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
