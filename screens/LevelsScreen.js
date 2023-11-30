import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import levelsData from '../utils/tests/levels.json';

const LevelsScreen = ({ navigation }) => {
  const renderLevelItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LevelDetail', { levelId: item.id });
        }}
      >
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={levelsData.levels}
        renderItem={renderLevelItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LevelsScreen;
