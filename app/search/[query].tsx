import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import CardContainer from '@/components/CardContainer';

export default function Search() {
  const { query } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: query,
      // headerShown: false,
    });
  }, [navigation]);

  return (
    <CardContainer
      Action='query'
      Query={query as string}
    />
  );
}

