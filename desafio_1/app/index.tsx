import Header from '@/components/Header';
import Main from '@/components/Main';
import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
      }}
    >
      <Header search={search} setSearch={setSearch} />
      <Main search={search} />
    </View>
  );
}
