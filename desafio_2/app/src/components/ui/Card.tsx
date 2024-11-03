import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '@/src/constants/styles';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('@img/image.png')} style={styles.image} />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.title}>
          O que é linguagem de programação? Conheça as principais
        </Text>
        <Text>
          Uma das mais populares vertentes da tecnologia da informação, a área
          de...
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  image: {
    width: '100%',
  },
  textContent: {
    gap: 4,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
