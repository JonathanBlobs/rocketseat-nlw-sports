import { Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../componentes/Heading';
import { GameCard, GameCardProps } from '../../componentes/GameCard';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../componentes/Background';
import { useNavigation } from '@react-navigation/native'; 

export function Home() {
  const [games, setGames]= useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame( {id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl});
  }

  useEffect(() => {
    fetch('http://192.168.15.6:3333/games')
    .then (response => response.json())
    .then (data => setGames(data))
  }, [])

  return (
    <Background>

    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title="Encontre o seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
            onPress={() => handleOpenGame(item)}
          />
        )}

        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}

      />


    </SafeAreaView>
    </Background>

  );
}