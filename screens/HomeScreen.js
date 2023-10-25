// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1">
      {/* Background Image */}
      <Image
        source={require('../assets/eiffel2.jpg')}
        style={{ flex: 3, width: '100%', height: '120%' }}
      />
      
      {/* Settings Icon */}
      <TouchableOpacity
        className="absolute top-4 right-4"
        onPress={() => navigation.navigate('Settings')}
      >
        <Ionicons name="settings" size={24} color="white" />
      </TouchableOpacity>

      {/* Main Content */}
      <View className="flex-1 items-center justify-center bg-slate-400">
        <View>
          <TouchableOpacity
            className="bg-purple-500 w-30 rounded-lg p-4 m-2"
            onPress={() => navigation.navigate('Practice')}
          >
            <Text className="text-white text-center">Get Started</Text>
          </TouchableOpacity>
        </View>
        <View className='flex flex-row '>
          <TouchableOpacity
            className="bg-purple-500 rounded-lg p-4 m-2 w-24"
            onPress={() => navigation.navigate('About')}
          >
            <Text className="text-white text-center">About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-purple-500 rounded-lg p-4 m-2"
            onPress={() => navigation.navigate('Feedback')}
          >
            <Text className="text-white text-center">Give Feedback</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default HomeScreen;
