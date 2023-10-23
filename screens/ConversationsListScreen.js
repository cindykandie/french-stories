// ConversationsList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const convos = require('../utils/convos.json'); // Import conversation data

const ConversationsList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="bg-blue-500 rounded-lg p-4 m-2" // Apply Tailwind CSS-like classes using className
      onPress={() => navigation.navigate('ConversationDetail', { conversationId: item.id, title: item.title })}
    >
      <Text className="text-white">{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Conversation List</Text>
      <FlatList
        data={convos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ConversationsList;
