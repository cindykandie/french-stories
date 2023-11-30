import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import levelsData from '../utils/tests/levels.json';

const LevelDetailScreen = ({ route, navigation }) => {
  const { levelId } = route.params;
  const level = levelsData.levels.find((level) => level.id === levelId);

  const renderTestItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TestDetail', { testId: item.id });
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
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 16 }}>{level.name}</Text>
      <FlatList
        data={level.tests}
        renderItem={renderTestItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LevelDetailScreen;
