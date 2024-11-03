import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { padding } from '@/constants/Padding';

interface HeaderProps {
  search: string;
  setSearch: (text: string) => void;
}

const Header = ({ search, setSearch }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textColor, styles.title]}>
        <Text style={{ color: Colors.accent }}>Code</Text>Lab
      </Text>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Faça sua Pesquisa aqui"
        placeholderTextColor="#AFABB6"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.Y,
    paddingHorizontal: padding.X,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  textColor: {
    color: 'white',
  },
  title: {
    fontSize: 24,
  },
  input: {
    backgroundColor: Colors.tertiary,
    color: 'white',
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    width: '100%',
  },
});
