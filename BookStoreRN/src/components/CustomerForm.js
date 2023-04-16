import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import RadioForm from 'react-native-simple-radio-button';

const CustomerForm = ({
  name,
  setName,
  phoneNo,
  setPhoneNo,
  locality,
  setLocality,
  landmark,
  setLandmark,
  address,
  setAddress,
  pinCode,
  setPinCode,
  city,
  setCity,
  showSummary,
  setShowSummary,
  state,
  setState,
}) => {
  const [showContinueButton, setShowContinueButton] = useState(true);
  const radio_props = [
    {label: 'Home', value: 0},
    {label: 'Work', value: 1},
    {label: 'Others', value: 1},
  ];

  const handleContinueButton = () => {
    setShowContinueButton(false);
    setShowSummary(!showSummary);
  };

  return (
    <View style={styles.column}>
      <View style={styles.row}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
          value={name}
          onChangeText={input => setName(input)}
        />

        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
          value={phoneNo}
          onChangeText={input => setPhoneNo(input)}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="Pincode"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
          value={pinCode}
          onChangeText={input => setPinCode(input)}
        />

        <TextInput
          placeholder="Locality"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
          value={locality}
          onChangeText={input => setLocality(input)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Address"
          multiline={true}
          placeholderTextColor={Colors.cardBackground}
          style={styles.addressInput}
          value={address}
          onChangeText={input => setAddress(input)}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="City/Town"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
          value={city}
          onChangeText={input => setCity(input)}
        />

        <TextInput
          placeholder="Landmark"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
          value={landmark}
          onChangeText={input => setLandmark(input)}
        />
      </View>

      <View>
        <Text style={styles.typeHeader}>Type</Text>
      </View>

      <RadioForm
        style={styles.radioBtn}
        buttonSize={15}
        radio_props={radio_props}
        initial={null}
        formHorizontal={true}
        labelHorizontal={true}
        buttonColor={Colors.cardBackground}
        animation={true}
        onPress={value => {
          setState(value);
        }}
      />

      <View>
        {showContinueButton ? (
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={handleContinueButton}>
            <Text style={styles.orderText}>Continue</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default CustomerForm;

const styles = StyleSheet.create({
  nameInput: {
    padding: 5,
    fontSize: 15,
    color: Colors.cardBackground,
    width: '40%',
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  addressInput: {
    padding: 5,
    fontSize: 15,
    color: Colors.cardBackground,
    width: '97%',
    height: 70,
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  roundView: {
    width: 15,
    height: 15,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: Colors.cardBackground,
    margin: 10,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeOrder: {
    backgroundColor: Colors.mainBackground,
    width: '40%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  orderText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
  typeHeader: {
    color: Colors.cardBackground,
    fontSize: 15,
  },
  radioBtn: {
    justifyContent: 'space-between',
    margin: 10,
  },
});
