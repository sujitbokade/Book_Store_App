import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomPages = ({navigation}) => {
  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity>
        <Icon name="home" size={30} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={30} color="#999" />
      </TouchableOpacity>

      <Text style={styles.pagesText}>1 of 6</Text>

      <TouchableOpacity>
        <Ionicons name="chevron-forward-outline" size={30} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomPages;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
  },

  pagesText: {
    color: '#999',
    fontSize: 15,
  },
});
