import { extendTheme } from 'native-base';
import { Platform } from 'react-native';
import Device from 'react-native-device-info';
import colors from './Colors';
import { Button } from './components';

const theme = extendTheme({
  colors: {
    // Add new color
    app: colors,
  },
  shadows: {
    card: {
      shadowColor: colors.themeColor.dark,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: Platform.OS === 'web' ? 10 : 7,
      elevation: 3,
    },
  },
  components: {
    Button,
  },
});

const isAndroid = Platform.OS === 'android';
const isIPad = Device.isTablet();
const isWeb = Platform.OS === 'web';

type CustomThemeType = typeof theme;

declare module 'native-base' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}

export { theme, isAndroid, isIPad, isWeb };
export { default as ApplicationStyles } from './ApplicationStyles';
export { default as Colors } from './Colors';
export * from './Metrics';
