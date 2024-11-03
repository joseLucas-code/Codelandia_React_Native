import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './ui/Card';
import { SIZE } from '../constants/styles';

const Main = () => {
  return (
    <View
      style={{
        gap: 16,
        paddingHorizontal: SIZE.paddingX,
        paddingVertical: SIZE.paddingY,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: '600' }}>
        Artigos recomendados
      </Text>

      <View style={{ alignItems: 'center', gap: 18 }}>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default Main;
