import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Services} from '../../infrastructure/services';
import {GestureResponderEvent, SafeAreaView, Text} from 'react-native';
import {Hooks} from '../../core/application/hooks';
import {UserEntity} from '../../core/domain/entities/UserEntity';
import {TransactionForm} from '../components/forms/TransactionForm';

export default function TransactionEditView() {
  let abortController = new AbortController();

  const useTransaction = Hooks.useTransaction();

  const [users, setUsers] = useState<UserEntity[]>([]);

  const handleFormSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    useTransaction.setIsDisabled(true);

    try {
      await useTransaction.updateTransaction(1, abortController.signal);
    } catch (error: any) {
      if (!('messages' in error)) {
        return;
      }

      const messages = await error.messages;

      console.log(messages);
    } finally {
      useTransaction.setIsDisabled(false);
    }
  };

  const init = useCallback(async () => {
    useTransaction.setIsDisabled(true);

    try {
      await useTransaction.getTransaction(Number(1), abortController.signal);

      const usersList = await Services.UserService.getAll(
        {},
        abortController.signal,
      );

      setUsers(usersList as UserEntity[]);
    } catch (error) {
      console.log(error);
    } finally {
      useTransaction.setIsDisabled(false);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <SafeAreaView>
      <Text>Modfier la transaction</Text>
      <TransactionForm
        useTransaction={useTransaction}
        isDisabled={useTransaction.isDisabled}
        users={users}
        handleFormSubmit={handleFormSubmit}
      />
    </SafeAreaView>
  );
}
