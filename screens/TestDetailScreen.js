import React from 'react';
import { View, Text, FlatList } from 'react-native';
import levelsData from '../utils/tests/levels.json';

const TestDetailScreen = ({ route }) => {
  const { testId, levelId } = route.params;
  
  // Find the level based on levelId
  const level = levelsData.levels.find((level) => level.id === levelId);
  
  if (!level) {
    // Handle the case where the level is not found
    return (
      <View>
        <Text>Level not found</Text>
      </View>
    );
  }

  // Find the test based on testId
  const test = level.tests.find((test) => test.id === testId);

  const renderQuestionItem = ({ item }) => {
    return (
      <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontSize: 18 }}>{item.questionText}</Text>
        <Text>Options: {item.options.join(', ')}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 16 }}>{test.name}</Text>
      <FlatList
        data={test.questions}
        renderItem={renderQuestionItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TestDetailScreen;
