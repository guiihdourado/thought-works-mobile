import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import messaging from '@react-native-firebase/messaging';

import Routes from './routes';

const App = () => {
  messaging()
    .subscribeToTopic('thoughtworks')
    .then(() => console.log('Subscribed to topic!'));

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert(remoteMessage.data.content);
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
