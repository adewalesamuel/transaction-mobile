import React, {useContext, useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  SafeAreaView,
  Text,
} from 'react-native';
import {AuthService} from '../../infrastructure/services/AuthService';
import {LoginForm} from '../components/forms/LoginForm';
import {setToken} from '../../infrastructure/services/Api';
import {AppContext} from '../../App';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export default function LoginView() {
  let abortController = new AbortController();

  const {setSessionToken, setUser, setIsLoggedIn} = useContext(AppContext);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleFormSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    setIsDisabled(true);

    try {
      const payload = {email, password};

      const user = await AuthService.login(
        JSON.stringify(payload),
        abortController.signal,
      );

      const {access_token} = user;

      setToken(access_token as string);
      setUser(user);
      setSessionToken(access_token as string);
      setIsLoggedIn(true);

      navigation.navigate('TransactionList');
    } catch (error: any) {
      if ('message' in error) {
        console.log(error.message);
      }
      if (!('messages' in error)) {
        return;
      }

      const messages = await error.messages;
      console.log(messages);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <SafeAreaView>
      <Text>Connexion</Text>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isDisabled={isDisabled}
        handleFormSubmit={handleFormSubmit}
      />
      <Pressable>
        <Text>Inscription</Text>
      </Pressable>
    </SafeAreaView>
  );
}
