import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
    }}>
      <Drawer.Screen
        name='categories_drawer'
        component={CategoriesScreen}
        options={{
          title: 'All Categories'
        }}
      />
      
      <Drawer.Screen
        name='favourites'
        component={FavouritesScreen}
        options={{
          title: 'Favourites'
        }}
      />
    </Drawer.Navigator>
  )
}

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
            options={{
              headerShown: false
            }}
            component={DrawerNavigator}
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
