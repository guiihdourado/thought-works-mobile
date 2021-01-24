import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const Notification = styled(RectButton)`
  margin-top: 36px;
  height: 40px;
  background: #ef5ba1;
  border-radius: 10px;
  width: 200px;

  justify-content: center;
  align-items: center;
`;

export const NotificationText = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const GoBack = styled.TouchableOpacity`
  padding-top: 100px;
`;

export const GoBackText = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
