import React, {useEffect, useState} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import api from '../../services/api';

import {ScrollView, Text, Button, ButtonText} from './styles';

const Home = ({navigation}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function loadAccounts() {
      const {data} = await api.get('/accounts');

      setContacts(data);
    }

    loadAccounts();
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        if (link) {
          const slug = link.url.split('/').pop();

          navigation.navigate('Show', {
            slug,
          });
        }
      });
  }, [navigation]);

  return (
    <ScrollView>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Button
            key={contact.id}
            onPress={() =>
              navigation.navigate('Show', {
                slug: contact.slug,
              })
            }>
            <ButtonText>{contact.name}</ButtonText>
          </Button>
        ))
      ) : (
        <Text>There are no accounts with generated links.</Text>
      )}
    </ScrollView>
  );
};

export default Home;
