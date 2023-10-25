// ExerciseScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ExerciseScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Sample exercise questions and answers
  const exerciseData = [
    {
      question: "What is 'Bonjour' in English?",
      options: ["Hello", "Goodbye", "Thank you"],
      correctAnswer: "Hello",
    },
    {
      question: "Comment ça va?",
      options: ["How are you?", "What's your name?", "Good morning"],
      correctAnswer: "How are you?",
    },
    {
      question: "Quel est le mot français pour 'house'?",
      options: ["Maison", "Chien", "Fleur"],
      correctAnswer: "Maison",
    },
    {
      question: "What does 'merci' mean in English?",
      options: ["Please", "Thank you", "Excuse me"],
      correctAnswer: "Thank you",
    },
    {
      question: "Translate 'amis' to English.",
      options: ["Friends", "Family", "Food"],
      correctAnswer: "Friends",
    },
    {
      question: "How do you say 'cat' in French?",
      options: ["Chien", "Chat", "Poisson"],
      correctAnswer: "Chat",
    },
    {
      question: "Which word means 'water' in French?",
      options: ["Pluie", "Vent", "Eau"],
      correctAnswer: "Eau",
    },
    {
      question: "What is 'pencil' in French?",
      options: ["Livre", "Stylo", "Chaise"],
      correctAnswer: "Stylo",
    },
    {
      question: "Translate 'été' to English.",
      options: ["Autumn", "Summer", "Winter"],
      correctAnswer: "Summer",
    },
    {
      question: "Comment dit-on 'happy' en français?",
      options: ["Triste", "Joyeux", "Ennuyé"],
      correctAnswer: "Joyeux",
    },
    {
      question: "What does 'voiture' mean in English?",
      options: ["Train", "Bicycle", "Car"],
      correctAnswer: "Car",
    },
    {
      question: "How do you say 'apple' in French?",
      options: ["Banane", "Pomme", "Poire"],
      correctAnswer: "Pomme",
    },
    {
      question: "Which word means 'book' in French?",
      options: ["Fleur", "Maison", "Livre"],
      correctAnswer: "Livre",
    },
    {
      question: "Translate 'soleil' to English.",
      options: ["Sun", "Rain", "Moon"],
      correctAnswer: "Sun",
    },
    {
      question: "Quel est le mot français pour 'friend'?",
      options: ["Amour", "Famille", "Ami"],
      correctAnswer: "Ami",
    },
    {
      question: "What is 'chocolate' in French?",
      options: ["Fromage", "Chocolat", "Pain"],
      correctAnswer: "Chocolat",
    },
    {
      question: "Translate 'oiseau' to English.",
      options: ["Fish", "Bird", "Cat"],
      correctAnswer: "Bird",
    },
    {
      question: "Comment dit-on 'good night' en français?",
      options: ["Bonjour", "Bonne nuit", "Au revoir"],
      correctAnswer: "Bonne nuit",
    },
    {
      question: "What does 'chapeau' mean in English?",
      options: ["Hat", "Shirt", "Shoes"],
      correctAnswer: "Hat",
    },
    {
      question: "How do you say 'beach' in French?",
      options: ["Plage", "Montagne", "Rue"],
      correctAnswer: "Plage",
    }
  ];
  

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
