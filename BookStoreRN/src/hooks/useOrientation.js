/* eslint-disable no-shadow */
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useOrientation = () => {
  const {width, height} = Dimensions.get('window');

  const [orientation, setOrientation] = useState(
    width > height ? 'landscape' : 'portrait',
  );

  const handleScreenMode = ({window}) => {
    const {width, height} = window;
    setOrientation(width > height ? 'landscape' : 'portrait');
  };

  useEffect(() => {
    const subscribe = Dimensions.addEventListener('change', handleScreenMode);
    return () => {
      subscribe.remove();
    };
  });

  return orientation;
};
