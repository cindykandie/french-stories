// PracticeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const PracticeScreen = ({ navigation }) => {
  return (
    <View className="flex-1">
      {/* Background Image */}
      <Image
        source={require('../assets/eiffel2.jpg')}
        style={{ flex: 1, width: '100%', height: '100%' }}
      />
      
      {/* Fancy Text */}
      <Text className="text-4xl text-black text-center pt-1">"Parlons français."</Text>
      <Text className="text-4xl text-purple-600 text-center pt-1">"Let's Speak French"</Text>

      {/* Buttons/Links */}
      <View className=" items-center justify-end p-16">
        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-4 m-2"
          onPress={() => navigation.navigate('Exercise')}
        >
          <Text className="text-white">Exercises</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-4 m-2"
          onPress={() => navigation.navigate('ConversationsList')}
        >
          <Text className="text-white">Conversations</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PracticeScreen;
