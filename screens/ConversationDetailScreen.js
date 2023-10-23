// ConversationDetail.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
const convos = require('../utils/convos.json'); // Import conversation data

const ConversationDetail = ({ route }) => {
  const { conversationId, title } = route.params;
  const convo = convos.find((c) => c.id === conversationId);

  return (
    <ScrollView>
      <View>
        <Text className="text-xl font-bold">{title}</Text>
        {convo.content.map((item, index) => (
          <View key={index} className="m-2">
            <Text className="text-black">{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ConversationDetail;
