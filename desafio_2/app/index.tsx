import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import { SIZE } from './src/constants/styles';
import Main from './src/components/Main';

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top + 5,
        paddingBottom: SIZE.paddingY,
        gap: 24,
      }}
    >
      <ScrollView>
        <Header />
        <Main />
      </ScrollView>
    </View>
  );
}
