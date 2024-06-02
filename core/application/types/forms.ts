import {PropsWithChildren} from 'react';
import {useTransactionT, useUserT} from './hooks';
import {UserEntity} from '../../domain/entities/UserEntity';
import {GestureResponderEvent} from 'react-native';

export type BaseFormProps = PropsWithChildren & {
  isDisabled: boolean;
  handleFormSubmit: (e: GestureResponderEvent) => Promise<void>;
};

export type TransactionFormProps = BaseFormProps & {
  useTransaction: useTransactionT;
  users: UserEntity[];
};

export type UserFormProps = BaseFormProps & {
  useUser: useUserT;
};

export type LoginFormProps = BaseFormProps & {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
};
