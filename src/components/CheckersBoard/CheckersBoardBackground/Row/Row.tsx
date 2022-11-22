import {StyleSheet, View} from 'react-native';
import {RowProps} from './Row.interface';
import React from 'react';
import {Square} from '../Square/Square';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export const Row = ({white, row}: RowProps) => {
  const offset = white ? 0 : 1;
  return (
    <View style={styles.container}>
      {new Array(8).fill(0).map((_, i) => (
        <Square row={row} col={i} key={i} white={(i + offset) % 2 === 1} />
      ))}
    </View>
  );
};
