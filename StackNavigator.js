import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultsScreen';
import CreateScreen from './screens/CreateScreen';
import AddQuestion from './screens/AddQuestion';
import QuizChoice from './screens/QuizChoice';
const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Create" component={CreateScreen} options={{headerShown:false}}/>
            <Stack.Screen name="AddQues" component={AddQuestion} options={{headerShown:false}}/>
            <Stack.Screen name="QuizChoice" component={QuizChoice} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default StackNavigator

const styles = StyleSheet.create({})