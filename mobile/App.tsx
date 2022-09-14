import { StatusBar } from 'react-native';

import { Background } from './src/componentes/Background';


export default function App() {
  return (
    <Background>
      <StatusBar

      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
     
    </Background>
  );
}


