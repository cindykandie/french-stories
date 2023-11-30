// ExerciseScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ExerciseScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Sample exercise questions and answers
 

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === exerciseData[currentQuestion].correctAnswer) {
      // Increase the score if the answer is correct
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    // Check if all questions have been answered
    if (currentQuestion >= exerciseData.length) {
      // You can display the final score or navigate to another screen
      alert(`Exercise completed! Your score: ${score}/${exerciseData.length}`);
    }
  }, [currentQuestion, exerciseData.length, score]);

  return (
    <View className="flex-1 items-center justify-center p-4">
      {currentQuestion < exerciseData.length ? (
        <View>
          <Text className="text-xl font-bold mb-4">{exerciseData[currentQuestion].question}</Text>
          {exerciseData[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              className="bg-blue-500 rounded-lg p-2 m-2"
              onPress={() => handleAnswer(option)}
            >
              <Text className="text-white">{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text className="text-xl font-bold">Exercise completed! Your score: {score}/{exerciseData.length}</Text>
      )}
    </View>
  );
};

export default ExerciseScreen;
