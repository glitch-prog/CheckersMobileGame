import {View} from 'react-native';
import React, {useRef} from 'react';
import {Row} from './Row/Row';

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

const Background = () => {
  return (
    <View style={{flex: 1}}>
      {new Array(8).fill(0).map((_, i) => (
        <Row key={i} white={i % 2 === 0} row={i} />
      ))}
    </View>
  );
};

export default Background;
