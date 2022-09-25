import { StyleSheet } from 'react-native';

const newLocal = 72;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },

  logo: {
    width: 90,
    height: 40,
  },

  right: {
    width: 20,
    height: 20
  },

  cover: {
    
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 32
  },
  coverContainer:{
    width:'100%',
    paddingHorizontal: 32,
    marginTop: 32
    
    
  },

  containerList: {
    width: '100%',

  },
contentList: {
  paddingLeft: 32,
  paddingRight: 64,
  alignItems: 'flex-start',
}
});