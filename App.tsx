import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen } from './src/screens/HomeScreen';
import { CalendarScreen } from './src/screens/CalendarScreen';
import { FocusScreen } from './src/screens/FocusScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

        <Tab.Navigator
          initialRouteName="Главная"
          screenOptions={({ route }) => ({
            headerShown: true,
            tabBarActiveTintColor: '#00adf5',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: '#E5E5E5',
              paddingTop: 5,
              paddingBottom: 5,
              height: 60,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              switch (route.name) {
                case 'Главная':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Календарь':
                  iconName = focused ? 'calendar' : 'calendar-outline';
                  break;
                case 'Фокус':
                  iconName = focused ? 'timer' : 'timer-outline';
                  break;
                default:
                  iconName = 'help-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Главная"
            component={HomeScreen}
            options={{ headerTitle: 'Главная' }}
          />
          <Tab.Screen
            name="Календарь"
            component={CalendarScreen}
            options={{ headerTitle: 'Календарь' }}
          />
          <Tab.Screen
            name="Фокус"
            component={FocusScreen}
            options={{ headerTitle: 'Фокус' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
