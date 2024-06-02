/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {createContext, useState} from 'react';
import LoginView from './interface/views/LoginView';
import UserCreateView from './interface/views/RegisterView';
import TransactionListView from './interface/views/TransactionListView';
import TransactionEditView from './interface/views/TransactionEditView';
import {UserEntity} from './core/domain/entities/UserEntity';

const Stack = createNativeStackNavigator();
export const AppContext = createContext({
  user: {},
  setUser: (_user: UserEntity) => {
    return;
  },
  isLoggedIn: false,
  setIsLoggedIn: (_bool: boolean) => {
    return;
  },
  sessionToken: '',
  setSessionToken: (_token: string) => {
    return;
  },
});

function App(): React.JSX.Element {
  const [user, setUser] = useState({});
  const [sessionToken, setSessionToken] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        sessionToken,
        setSessionToken,
        isLoggedIn,
        setIsLoggedIn,
      }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={UserCreateView} />
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen
            name="TransactionList"
            component={TransactionListView}
          />
          <Stack.Screen
            name="TransactionEdit"
            component={TransactionEditView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
