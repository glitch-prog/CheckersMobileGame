import {Text, View} from 'react-native';
import React from 'react';
import {SquareProps} from './Square.interface';

const WHITE = 'rgb(100, 133, 68)';
const BLACK = 'rgb(230, 233, 198)';

export const Square = ({white, row, col}: SquareProps) => {
  const backgroundColor = white ? WHITE : BLACK;
  const color = white ? BLACK : WHITE;
  const textStyle = {fontWeight: '500' as const, color};
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 4,
        justifyContent: 'space-between',
      }}>
      <Text style={[textStyle, {opacity: col === 0 ? 1 : 0}]}>
        {'' + (8 - row)}
      </Text>
      {row === 7 && (
        <Text style={[textStyle, {alignSelf: 'flex-end'}]}>
          {String.fromCharCode(97 + col)}
        </Text>
      )}
    </View>
  );
};
