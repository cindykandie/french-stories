// ConversationDetail.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
const convos = require('../utils/convos.json');

const ConversationDetail = ({ route }) => {
  const { conversationId, title } = route.params;
  const convo = convos.find((c) => c.id === conversationId);

  return (
    <ScrollView className="m-2">
      <View>
        <Text className="text-3xl font-bold text-purple-900 text-center">{title}</Text>
        {convo.content.map((item, index) => (
          <View key={index} className="m-2">
            <Text className="text-black text-lg">{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ConversationDetail;
