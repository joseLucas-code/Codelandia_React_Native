import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { padding } from '@/constants/Padding';
import { Colors } from '@/constants/Colors';
import Card from './ui/Card';

const cardContent = [
  {
    date: '17 de ago, 2024',
    title: 'O que é linguagem de programação? Conheça as principais',
    paragraph:
      'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
  },
  {
    date: '12 de jul, 2024',
    title: 'GitHub agora permite fazer login sem precisar de senha',
    paragraph:
      'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
  },
  {
    date: '21 de jun, 2024',
    title: 'Por que os hiperlinks são azuis em sua maioria?',
    paragraph:
      'Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.',
  },
];

const Main = ({ search }: { search: string }) => {
  const filteredSearch = cardContent.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.paragraph.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ScrollView style={{ backgroundColor: Colors.secondary }}>
      <View style={styles.container}>
        {filteredSearch.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            paragraph={item.paragraph}
            date={item.date}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.X,
    paddingVertical: padding.Y,
    gap: 24,
  },
});
