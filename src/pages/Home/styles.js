import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})``;

export const Text = styled.Text`
  font-size: 12px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
