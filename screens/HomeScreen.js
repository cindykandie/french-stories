// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity className="bg-blue-500 rounded-lg p-4 m-2" onPress={() => navigation.navigate('ConversationsList')}>
        <Text className="text-white">Go to Conversations List</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-lg p-4 m-2" onPress={() => navigation.navigate('ConversationDetail')}>
        <Text className="text-white">Go to Conversation Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-lg p-4 m-2" onPress={() => navigation.navigate('Settings')}>
        <Text className="text-white">Go to Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-lg p-4 m-2" onPress={() => navigation.navigate('About')}>
        <Text className="text-white">Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-lg p-4 m-2" onPress={() => navigation.navigate('Feedback')}>
        <Text className="text-white">Go to Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-lg p-4 m-2" onPress={() => navigation.navigate('Exercise')}>
        <Text className="text-white">Go to Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
