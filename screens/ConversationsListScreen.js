import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const convos = require('../utils/convos.json'); // Import conversation data

const ConversationsList = ({ navigation }) => {
  return (
    <ScrollView className="my-5">
      <View className="flex-row flex-wrap justify-center gap-5">
        {convos.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-purple-500 rounded-lg p-4 h-36 w-36 border border-blue-900 shadow-md"
            onPress={() =>
              navigation.navigate('ConversationDetail', {
                conversationId: item.id,
                title: item.title,
              })
            }
          >
            <Text className="text-black font-semibold text-lg">{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ConversationsList;
