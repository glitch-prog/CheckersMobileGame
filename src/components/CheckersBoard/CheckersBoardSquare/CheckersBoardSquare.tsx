import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {squareStyles} from './CheckersBoardSquare.styles';

export const CheckersBoardSquare = ({color}: any) => {
  return (
    <TouchableOpacity
      style={[
        squareStyles.square,
        color == 'black' ? squareStyles.blackSquare : squareStyles.whiteSquare,
      ]}>
      <Text>{color}</Text>
    </TouchableOpacity>
  );
};
