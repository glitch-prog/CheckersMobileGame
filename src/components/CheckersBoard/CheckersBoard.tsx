import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useRef} from 'react';
import {CheckersBoardSquare} from './CheckersBoardSquare/CheckersBoardSquare';
import CheckersBoardBackground from './CheckersBoardBackground/CheckersBoardBackground';

const {width} = Dimensions.get('window');

function useConst<T>(initialValue: T | (() => T)): T {
  const ref = useRef<{value: T}>();
  if (ref.current === undefined) {
    // Box the value in an object so we can tell if it's initialized even if the initializer
    // returns/is undefined
    ref.current = {
      value:
        typeof initialValue === 'function'
          ? // eslint-disable-next-line @typescript-eslint/ban-types
            (initialValue as Function)()
          : initialValue,
    };
  }
  return ref.current.value;
}

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});

export const CheckersBoard = () => {
  return (
    <View style={styles.container}>
      <CheckersBoardBackground />
    </View>
  );
};

const boardStyle = StyleSheet.create({
  board: {flexDirection: 'row'},
});
