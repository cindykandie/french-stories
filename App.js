import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ConversationsListScreen from './screens/ConversationsListScreen';
import ConversationDetailScreen from './screens/ConversationDetailScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import ExerciseScreen from './screens/ExerciseScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="ConversationsList" component={ConversationsListScreen} options={{ title: 'Conversations' }} />
        <Stack.Screen name="ConversationDetail" component={ConversationDetailScreen} options={{ title: 'Conversation' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} options={{ title: 'Feedback' }} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} options={{ title: 'Exercise' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


