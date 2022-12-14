import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../componentes/Background';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Image } from 'react-native';
import { GameCardProps } from '../../componentes/GameCard';
import { Heading } from '../../componentes/Heading';
import { DuoCard, DuoCardProps } from '../../componentes/DuoCard';
import { useEffect, useState } from 'react';
import { DuoMatch } from '../../componentes/DuoMatch';


export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameCardProps;

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.15.6:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://192.168.15.6:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  }, []);

  return (
    <Background>

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <View style={styles.coverContainer}>
          <Image
            source={{ uri: game.bannerUrl }}
            style={styles.cover}
            resizeMode="stretch"

          />
        </View>

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item}
              onConnect={() => getDiscordUser (item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsVerticalScrollIndicator={false}
        />
        <DuoMatch
          visible={discordDuoSelected.length > 0} 
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}

