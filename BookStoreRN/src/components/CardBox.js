/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useOrientation} from '../hooks/useOrientation';
import BookCard from './BookCard';
import {useSelector} from 'react-redux';
import {myAxiosGetRequest} from '../controller/Controller';

const CardBox = () => {
  const [books, setBooks] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const value = useSelector(state => state.cart.value);
  const isPortrait = useOrientation() === 'portrait';

  const getBooksData = async () => {
    const response = await myAxiosGetRequest();
    const json = response.data;
    setBooksData(json);
    setBooks(json);
  };

  useEffect(() => {
    getBooksData();
  }, []);

  useEffect(() => {
    if (value === 'Price: High to Low') {
      booksData.sort((a, b) => (a.price > b.price ? 1 : -1));
      setBooks(booksData);
    } else if (value === 'Price: Low to High') {
      booksData.sort((a, b) => (a.price < b.price ? 1 : -1));
      setBooks(booksData);
    } else {
      setBooks(booksData);
    }
  }, [value]);

  return (
    <View style={styles.cardContainer}>
      {isPortrait ? (
        <FlatList
          key={'_'}
          keyExtractor={item => item._id}
          renderItem={({item, index}) => <BookCard {...item} />}
          data={books}
          numColumns={2}
          scrollEnabled={false}
        />
      ) : (
        <FlatList
          horizontal={true}
          key={'#'}
          keyExtractor={item => '#' + item._id}
          renderItem={({item, index}) => <BookCard {...item} />}
          data={books}
        />
      )}
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    margin: 7,
    flexDirection: 'row',
  },
});
