import { hexToRgb } from '../../utils';
import Colors from '../Colors';

export default {
  defaultProps: {
    variant: 'outline',
    autoCorrect: false,
  },
  variants: {
    outline: {
      _important: {
        fontSize: [16, 18],
        fontWeight: '400',
        _web: { fontSize: 18 },
        _invalid: {
          _light: {
            borderColor: 'app.red.light',
          },
          _dark: {
            borderColor: 'app.red.dark',
          },
        },
        _focus: {
          borderColor: 'app.primary.light',
          bg: hexToRgb(Colors.primary.light, 0.07),
        },
      },
      h: '50px',
      borderRadius: 5,
      borderWidth: 1,
      _light: {
        borderColor: 'app.primary.light',
        bg: 'app.white.light',
        color: 'app.lightBlack.light',
      },
      _dark: {
        borderColor: 'app.primary.dark',
        bg: 'app.white.dark',
        color: 'app.lightBlack.dark',
      },
    },
  },
};
