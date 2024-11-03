import { Pressable, StyleSheet, Text, View } from 'react-native';
import PeopleSVG from '../assets/img/people.svg';
import React from 'react';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { COLORS, SIZE } from '../constants/styles';

const Header = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PeopleSVG style={{ alignSelf: 'center' }} />
      <Text style={styles.title}>
        Encontre os <Text style={styles.titleAcent}>melhores artigos </Text>
        de programação em um só lugar
      </Text>
      <Text style={styles.paragraph}>
        Explore o topo da programação em um só lugar! Seu destino único para
        dicas e tendências atuais.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar Artigos</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZE.paddingY,
    paddingHorizontal: SIZE.paddingX,
    gap: 12,
    backgroundColor: '#F8F8FF',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  titleAcent: {
    color: COLORS.accent,
  },
  paragraph: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 6,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
  },
});
