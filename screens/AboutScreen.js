import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const AboutScreen = () => {
  const openWebsite = () => {
    Linking.openURL('https://intellixar.vercel.app'); // Opens the website in the default browser
  };

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">About The French App</Text>
      <Text className="text-lg">
        Welcome to The French App, a language learning application designed to help you improve your French language skills.
      </Text>
      <Text className="text-lg mt-4">
        Created by Cindy Kandie from Intellixar Tech
      </Text>
      {/* Adding the website link */}
      <TouchableOpacity onPress={openWebsite}>
        <Text className="text-lg mt-2 text-blue-500 underline">
          For more information and resources, visit our website: intellixar.tech
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutScreen;
