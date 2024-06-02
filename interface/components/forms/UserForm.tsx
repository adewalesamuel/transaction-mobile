import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {UserFormProps} from '../../../core/application/types/forms';
import {C} from '../../../core/application/constants';

export function UserForm(props: UserFormProps) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formGroup}>
        <Text style={styles.textLabel}>nom</Text>
        <TextInput
          style={styles.textInput}
          inputMode="text"
          value={props.useUser.name}
          textContentType="name"
          onChangeText={text => props.useUser.setName(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.textLabel}>email</Text>
        <TextInput
          style={styles.textInput}
          inputMode="text"
          keyboardType="email-address"
          value={props.useUser.email}
          textContentType="emailAddress"
          onChangeText={text => props.useUser.setEmail(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.textLabel}>password</Text>
        <TextInput
          style={styles.textInput}
          inputMode="text"
          value={props.useUser.password}
          textContentType="password"
          onChangeText={text => props.useUser.setPassword(text)}
        />
      </View>
      <View style={{...styles.formGroup, marginTop: C.SIZES.MD}}>
        <TouchableHighlight
          style={styles.button}
          onPress={props.handleFormSubmit}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableHighlight>
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
