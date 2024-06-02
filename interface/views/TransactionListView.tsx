import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Services} from '../../infrastructure/services';
import {TransactionEntity} from '../../core/domain/entities/TransactionEntity';
import {
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';

export default function TransactionListView() {
  let abortController = new AbortController();

  const {TransactionService} = Services;

  const [, setTransactions] = useState<TransactionEntity[]>([]);
  const [, setIsLoading] = useState(true);

  const handleEditClick = (
    e: GestureResponderEvent,
    data: TransactionEntity,
  ) => {
    e.preventDefault();
    console.log(data);
  };

  const init = useCallback(async () => {
    try {
      const transactionList = await TransactionService.getAll(
        {},
        abortController.signal,
      );

      setTransactions(transactionList as TransactionEntity[]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Liste des Transactions</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
