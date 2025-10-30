import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Timer } from '../components/Timer';

export const FocusScreen = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds

  return (
    <View style={styles.container}>
      <Timer timeLeft={timeLeft} isRunning={isTimerRunning} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsTimerRunning(!isTimerRunning)}
      >
        <Text style={styles.buttonText}>
          {isTimerRunning ? 'Пауза' : 'Старт'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00adf5',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});