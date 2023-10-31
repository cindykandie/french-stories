import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
const convos = require('../utils/convos.json');

const ConversationDetail = ({ route }) => {
  const { conversationId, title } = route.params;
  const convo = convos.find((c) => c.id === conversationId);

  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <ScrollView className="m-2">
      <View>
        <Text className="text-3xl font-bold text-center">{title}</Text>
        {convo.content.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: item.language === 'en' ? '#6F73D2' : '#FFF',
              margin: 4,
              padding: 8,
              borderRadius: 10,
            }}
          >
            {showTranslation || item.language === 'fr' ? (
              <Text
                style={{
                  color: item.language === 'en' ? '#ffffff' : '#333',
                  fontSize: 18,
                }}
              >
                {item.text}
              </Text>
            ) : (
              <Text style={{ color: 'transparent', fontSize: 18 }} className="text-ce">
                Click to reveal English translation
              </Text>
            )}
          </View>
        ))}
        <TouchableOpacity
          style={{
            backgroundColor: '#14213d',
            padding: 8,
            borderRadius: 10,
            alignSelf: 'center',
            margin: 10,
          }}
          onPress={() => setShowTranslation(!showTranslation)}
        >
          <Text style={{ color: '#ffffff', fontSize: 20 }}>
            {showTranslation ? 'Hide Translation' : 'Reveal English Translation'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ConversationDetail;
