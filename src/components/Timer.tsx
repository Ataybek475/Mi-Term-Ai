import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimerProps {
  timeLeft: number;
  isRunning: boolean;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, isRunning }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </Text>
      <Text style={styles.status}>
        {isRunning ? 'Фокусируемся!' : 'На паузе'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  time: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#2d4150',
  },
  status: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
});