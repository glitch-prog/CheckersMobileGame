import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Checker = ({color}: any) => {
  return (
    <TouchableOpacity>
      <Text style={{color: color}}>{color}</Text>
    </TouchableOpacity>
  );
};

export default Checker;
