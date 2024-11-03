import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CardProps {
  title: string;
  date: string;
  paragraph: string;
}

const Card = ({ title, date, paragraph }: CardProps) => {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }
  return (
    <View
      style={[
        styles.container,
        { borderColor: like ? Colors.accent : Colors.quartenary },
      ]}
    >
      <View style={styles.react}>
        <Text style={styles.date}>{date}</Text>
        <Ionicons
          name={like ? 'heart-sharp' : 'heart-outline'}
          size={28}
          color={Colors.accent}
          onPress={handleLike}
        />
      </View>
      <View style={{ gap: 12 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{paragraph}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 4,
    borderColor: Colors.quartenary,
    backgroundColor: Colors.tertiary,
    borderRadius: 6,
    gap: 18,
  },
  react: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    color: Colors.accent,
    fontSize: 14,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  paragraph: {
    color: '#AFABB6',
    fontSize: 16,
  },
});
