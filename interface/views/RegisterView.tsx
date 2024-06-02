import React from 'react';
import {
  Alert,
  GestureResponderEvent,
  Pressable,
  SafeAreaView,
  Text,
} from 'react-native';
import {Hooks} from '../../core/application/hooks';
import {UserForm} from '../components/forms/UserForm';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export default function UserCreateView() {
  let abortController = new AbortController();

  const useUser = Hooks.useUser();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleFormSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    useUser.setIsDisabled(true);

    try {
      await useUser.createUser(abortController.signal);

      Alert.alert('Success !', 'Vore compte à été créé');

      navigation.navigate('Login');
    } catch (error: any) {
      if ('message' in error) {
        console.log(error);
      }

      if (!('messages' in error)) {
        return;
      }

      const messages = await error.messages;

      console.log(messages.join(''));
    } finally {
      useUser.setIsDisabled(false);
    }
  };

  return (
    <SafeAreaView>
      <Text>Inscription</Text>
      <UserForm
        useUser={useUser}
        isDisabled={useUser.isDisabled}
        handleFormSubmit={handleFormSubmit}
      />
      <Pressable>
        <Text>Se connecter</Text>
      </Pressable>
    </SafeAreaView>
  );
}
