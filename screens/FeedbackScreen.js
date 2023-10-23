// FeedbackForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Handle feedback submission (e.g., sending feedback to a server or saving it locally)
    // You can add your own logic here
    // For this example, we're simply displaying the submitted feedback in an alert
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Feedback Form</Text>
      <TextInput
        className='border border-blue-500 p-2 mb-4'
        placeholder="Enter your feedback here"
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity
        className="bg-blue-500 rounded-lg p-2 text-center w-auto mx-12"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center">Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedbackForm;
