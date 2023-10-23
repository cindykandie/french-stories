// AboutScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const AboutScreen = () => {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-4">About Your App</Text>
      <Text className="text-lg">
        Welcome to My French App, a language learning application designed to help you improve your French language skills.
      </Text>
      <Text className="text-lg mt-4">
        Created by Cindy Kandie from Intellixar Tech
      </Text>
      <Text className="text-lg mt-2">
        For more information and resources, visit our website: intellixar.tech
      </Text>
    </View>
  );
};

export default AboutScreen;
