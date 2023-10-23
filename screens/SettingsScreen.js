// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleNotifications = () => {
    setNotificationsEnabled(!isNotificationsEnabled);
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Settings</Text>
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg">Enable Notifications</Text>
        <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} className="ml-4" />
      </View>
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg">Dark Mode</Text>
        <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} className="ml-4" />
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="text-lg">Language</Text>
        <Text className='text-lg text-blue-500 cursor-pointer'
          onPress={() => changeLanguage('French')}
        >
          {language}
        </Text>
        {/* You can use a dropdown or other UI for selecting the language */}
      </View>
    </View>
  );
};

export default SettingsScreen;
