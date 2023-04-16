import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomerForm from '../components/CustomerForm';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {incrementOrder, decrementOrder} from '../redux/CartReducer';
import {myAxiosPostRequest} from '../controller/Controller';

const CartItems = props => {
  const dispatch = useDispatch();

  const onPressIncrement = () => {
    dispatch(incrementOrder(props));
  };

  const onPressDecrement = () => {
    dispatch(decrementOrder(props));
  };

  return (
    <View style={styles.rowViewContainer}>
      <View style={styles.rowView}>
        <Image source={{uri: props.imageUrl}} style={styles.bookImage} />
      </View>
      <View>
        <View style={styles.bookContainer}>
          <Text style={styles.bookName}>{props.bookName}</Text>
          <Text style={{color: Colors.cardBackground}}>{props.author}</Text>
          <Text style={styles.priceTxt}>Rs {props.price * props.quantity}</Text>
        </View>
        <View style={styles.rowView}>
          <TouchableOpacity
            onPress={() => {
              onPressDecrement();
            }}>
            <View style={styles.roundBtn}>
              <Text style={styles.roundBtnText}>-</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.countView}>
            <Text style={styles.roundBtnText}>{props.quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              onPressIncrement();
            }}>
            <View style={styles.roundBtn}>
              <Text style={styles.roundBtnText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ShoppingCart = ({navigation}) => {
  const orderList = useSelector(state => state.cart.cart);

  const [showOrderButton, setShowOrderButton] = useState(true);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [landmark, setLandmark] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [state, setState] = useState(0);

  const handleOrderButton = () => {
    setShowOrderButton(false);
    setShowCustomerForm(true);
  };

  return (
    <View style={styles.homeContainer}>
      <View>
        <Header navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.cartContainer}>
          <View>
            <Text style={styles.mycart}>My cart({orderList.length})</Text>
          </View>
          <View>
            {orderList.map(item => (
              <View key={item._id}>
                <CartItems {...item} />
              </View>
            ))}
          </View>
          <View>
            {showOrderButton ? (
              <TouchableOpacity
                style={styles.placeOrder}
                onPress={handleOrderButton}>
                <Text style={styles.orderText}>Place Order</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        <View style={styles.customerContainer}>
          {showCustomerForm ? (
            <View>
              <Text style={styles.customerText}>Customer Details</Text>
              <CustomerForm
                name={name}
                setName={setName}
                phoneNo={phoneNo}
                setPhoneNo={setPhoneNo}
                locality={locality}
                setLocality={setLocality}
                landmark={landmark}
                setLandmark={setLandmark}
                address={address}
                setAddress={setAddress}
                pinCode={pinCode}
                setPinCode={setPinCode}
                city={city}
                setCity={setCity}
                showSummary={showSummary}
                setShowSummary={setShowSummary}
                state={state}
                setState={setState}
              />
            </View>
          ) : null}
        </View>

        <View style={styles.customerContainer}>
          {showSummary ? (
            <><View>
              <Text style={styles.customerText}>Order Summary</Text>
              {orderList.map(item => (
                <View
                  style={styles.rowViewContainer}
                  key={item._id}>
                  <View style={styles.rowView}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.bookImage} />
                  </View>
                  <View>
                    <View style={styles.bookContainer}>
                      <Text style={styles.bookName}>{item.bookName}</Text>
                      <Text style={{ color: Colors.cardBackground }}>
                        {item.author}
                      </Text>
                      <Text style={styles.priceTxt}>
                        Rs {item.price * item.quantity}
                      </Text>
                    </View>
                    <View style={styles.rowView}>
                      <View style={styles.quantityView}>
                        <Text style={styles.quantityTxt}>Quantity</Text>
                      </View>
                      <View style={styles.countView}>
                        <Text style={styles.roundBtnText}>{item.quantity}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View><View>
                {!showOrderButton ? (
                  <TouchableOpacity
                    style={styles.placeOrder}
                    onPress={async () => {
                      const response = await myAxiosPostRequest(
                        name,
                        phoneNo,
                        pinCode,
                        locality,
                        address,
                        city,
                        landmark
                      );
                      setTimeout(() => {
                        console.log(response);
                        navigation.navigate('OrderPlaced', {
                          response: response.data,
                        });
                      }, 2000);
                    } }>
                    <Text style={styles.orderText}>Checkout</Text>
                  </TouchableOpacity>
                ) : null}
              </View></>
          ) : null}
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Text style={styles.bookTxt}>
          Copyright @ 2023, Bookstore Private Limited. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};
export default ShoppingCart;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  bookTxt: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  cartContainer: {
    borderWidth: 0.3,
    borderColor: Colors.cardBackground,
    margin: 10,
    padding: 10,
  },
  mycart: {
    color: '#000',
    fontSize: 17,
    marginBottom: 15,
  },
  priceTxt: {
    color: Colors.mainBackground,
    fontSize: 15,
    fontWeight: 'bold',
  },
  roundBtn: {
    width: 30,
    height: 30,
    marginLeft: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  roundBtnText: {
    color: Colors.cardBackground,
    fontSize: 20,
    textAlign: 'center',
  },
  countView: {
    width: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 15,
    borderColor: Colors.cardBackground,
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
  customerContainer: {
    borderWidth: 0.3,
    borderColor: Colors.cardBackground,
    margin: 10,
    padding: 10,
  },
  customerText: {
    color: Colors.cardBackground,
    fontSize: 17,
    marginBottom: 5,
  },
  bottom: {
    backgroundColor: '#231709',
    justifyContent: 'center',
    width: '100%',
    height: '7%',
  },
  rowView: {
    flexDirection: 'row',
  },
  rowViewContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  columnView: {
    flexDirection: 'column',
  },
  quantityTxt: {
    fontSize: 18,
    color: Colors.cardBackground,
  },
  quantityView: {
    marginLeft: 15,
  },
  bookName: {
    color: Colors.bookName,
  },
  bookContainer: {
    margin: 15,
  },
});
