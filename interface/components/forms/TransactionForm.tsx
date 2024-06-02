import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {TransactionFormProps} from '../../../core/application/types/forms';
import {C} from '../../../core/application/constants';

export function TransactionForm(props: TransactionFormProps) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formGroup}>
        <Text style={styles.textLabel}>number</Text>
        <TextInput
          style={styles.textInput}
          inputMode="text"
          value={props.useTransaction.number}
          onChangeText={text => props.useTransaction.setNumber(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.textLabel}>date</Text>
        <TextInput
          style={styles.textInput}
          inputMode="text"
          textContentType="birthdate"
          value={props.useTransaction.date}
          onChangeText={text => props.useTransaction.setDate(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.textLabel}>amount</Text>
        <TextInput
          style={styles.textInput}
          inputMode="numeric"
          keyboardType="numeric"
          value={props.useTransaction.amount.toString()}
          onChangeText={text => props.useTransaction.setAmount(Number(text))}
        />
      </View>
      <View style={{...styles.formGroup, marginTop: C.SIZES.MD}}>
        <Pressable style={styles.button} onPress={props.handleFormSubmit}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    padding: C.SIZES.SM,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginVertical: C.SIZES.SM,
  },
  textLabel: {
    marginBottom: C.SIZES.SM,
  },
  textInput: {
    color: C.COLORS.BLACK,
    borderWidth: 1,
    borderColor: C.COLORS.BLACK,
    borderStyle: 'solid',
    paddingHorizontal: C.SIZES.MD,
    paddingVertical: C.SIZES.SM,
    backgroundColor: C.COLORS.WHITE,
    borderRadius: C.SIZES.SM,
  },
  button: {
    backgroundColor: C.COLORS.PRIMARY,
    color: C.COLORS.WHITE,
    paddingHorizontal: C.SIZES.MD,
    paddingVertical: C.SIZES.SM,
    borderRadius: C.SIZES.SM,
    marginTop: C.SIZES.MD,
  },
  buttonText: {
    textAlign: 'center',
    color: C.COLORS.WHITE,
    fontSize: C.SIZES.MD,
  },
});
