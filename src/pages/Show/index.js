import React from 'react';
import startCase from 'lodash/startCase';

import api from '../../services/api';

import {
  View,
  Text,
  Notification,
  NotificationText,
  GoBack,
  GoBackText,
} from './styles';

const Show = ({route, navigation}) => {
  const {slug} = route.params;

  async function sendNotification() {
    await api.post('/notifications', {
      name: startCase(slug),
    });
  }

  return (
    <View>
      <Text>This page is for {startCase(slug)}</Text>
      <Notification onPress={sendNotification}>
        <NotificationText>Send Notification</NotificationText>
      </Notification>
      <GoBack onPress={() => navigation.goBack()}>
        <GoBackText>Voltar</GoBackText>
      </GoBack>
    </View>
  );
};

export default Show;
