import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';
import { Background } from '../Background';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },

  discord: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD
  },

  confirm: {
    alignItems:'center',
    marginTop: 24
  },

  label: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginTop: 24,
    marginBottom: 8
  },

  discordButtom: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 32
  },

  closeIcon:{
    alignSelf:'flex-end',
    margin: 16
  },

  content: {
    width: 311,
    backgroundColor:THEME.COLORS.SHAPE,
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center'
  },
});