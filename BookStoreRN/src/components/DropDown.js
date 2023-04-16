import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {Dropdown} from 'react-native-element-dropdown';
import {sortFilter} from '../redux/CartReducer';
import {useDispatch} from 'react-redux';

const DropDown = () => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  const data = [
    {label: 'Sort by relevence', value: '1'},
    {label: 'Price: Low to High', value: '2'},
    {label: 'Price: High to Low', value: '3'},
    {label: 'Newly Arrived', value: '4'},
  ];

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderText}
        selectedTextStyle={styles.placeholderText}
        itemTextStyle={styles.dropDownText}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Sort by relevence"
        value={value}
        onChange={item => {
          setValue(item.value);
          dispatch(sortFilter(item.label));
        }}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  placeholderText: {
    fontSize: 13,
    color: Colors.cardBackground,
  },
  dropDownText: {
    fontSize: 12,
    color: Colors.cardBackground,
    marginVertical: -20,
  },
  dropdown: {
    height: 30,
    width: 140,
    borderColor: Colors.cardBackground,
    borderWidth: 1,
    padding: 5,
  },
});
