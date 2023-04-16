/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import {useOrientation} from '../hooks/useOrientation';

const Header = ({navigation}) => {
  const cart = useSelector(state => state.cart.cart);
  const isPortrait = useOrientation() === 'portrait';
  return (
    <View style={styles.headerContainer}>
      <View style={[styles.logoIcon, {paddingLeft: isPortrait ? 0 : '3%'}]}>
        <Ionicons name="book-outline" size={20} color="#fff" />
      </View>
      <View>
        <Text style={styles.logoText}>Bookstore</Text>
      </View>

      <View style={{width: '40%'}}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.cardBackground}
          style={styles.searchInput}
        />
      </View>

      <View style={{height: 25}}>
        <TouchableOpacity
          style={styles.cartView}
          onPress={() => {
            navigation.navigate('ShoppingCart');
          }}>
          <Text style={styles.headerText}>Cart</Text>
          <Ionicons
            name="cart-outline"
            size={20}
            color="#fff"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
      {cart.length > 0 ? (
        <View
          style={{
            position: 'relative',
            backgroundColor: 'blue',
            width: 20,
            height: 20,
            borderRadius: 20 / 2,
            bottom: 12,
            right: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: 8,
            }}>
            {cart.length}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainBackground,
  },

  logoIcon: {
    width: '7%',
    marginLeft: 15,
  },

  logoText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 5,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    color: Colors.mainBackground,
    margin: 5,
    padding: 5,
    marginVertical: 10,
  },
  cartView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 5,
  },
});
