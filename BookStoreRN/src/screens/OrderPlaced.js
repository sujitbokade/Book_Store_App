import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import { checkOut } from '../redux/CartReducer';
import { useDispatch } from 'react-redux';

const OrderPlaced = ({navigation, route}) => {
  const response = route.params?.response;
  const id = response._id;
  const name = response.name;

  const dispatch = useDispatch();
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.flexColumn}>
        <View style={styles.rowWithPadding}>
          <Image
            source={require('../assets/orderPlaced.webp')}
            style={styles.imageView}
          />
        </View>
        <View>
          <Text style={styles.confirmText}>
            Congratulations!!! your order is confirmed.
            {'\n'}
            Order details : Order ID = {id} && Customer name = {name}
            {'\n'}
            Save the order details for furthur updates.
          </Text>
        </View>
        <View style={styles.columnWithPadding}>
          <View style={styles.rowStyle}>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Email us</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Contact us</Text>
            </View>
            <View style={styles.tableAddress}>
              <Text style={styles.tableText}>Address</Text>
            </View>
          </View>
          <View style={styles.rowStyle}>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>email</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>123</Text>
            </View>
            <View style={styles.tableAddress}>
              <Text style={styles.tableText}>Address</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={() => {
              dispatch(checkOut());
              navigation.navigate('Home');
            }}>
            <Text style={styles.orderText}>Continue Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={() => {
              navigation.navigate('LinkingScreen');
            }}>
            <Text style={styles.orderText}>Linking Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bookTxt}>
          Copyright @ 2023, Bookstore Private Limited. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};
export default OrderPlaced;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookTxt: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  bottom: {
    flex: 0.7,
    backgroundColor: '#231709',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    //flex: 1,
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 11,
  },
  rowWithPadding: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  confirmText: {
    color: Colors.cardBackground,
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  columnWithPadding: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tableRow: {
    width: '30%',
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  tableText: {
    color: Colors.cardBackground,
    textAlign: 'center',
    fontSize: 15,
  },
  tableAddress: {
    width: '40%',
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  placeOrder: {
    backgroundColor: Colors.mainBackground,
    width: '50%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  orderText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  imageView: {
    width: 150,
    height: 150,
  },
});
