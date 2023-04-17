export default {
  defaultProps: {
    variant: 'medium',
  },
  variants: {
    small: {
      _text: {
        fontSize: [13, 16],
        fontWeight: '700',
        _light: { color: 'app.lightBlack.light' },
        _dark: { color: 'app.lightBlack.dark' },
        _web: {
          fontFamily: null,
          fontSize: [13],
          _dark: { color: 'app.black.light' },
        },
      },
    },
    medium: {
      _text: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: '19px',
        _light: { color: 'app.lightBlack.light' },
        _dark: { color: 'app.lightBlack.dark' },
      },
    },
    large: {
      _text: {
        fontWeight: '400',
        _web: { fontSize: 20 },
        fontSize: [16, 30],
        lineHeight: [16, 30],
        _light: { color: 'app.lightBlack.light' },
        _dark: { color: 'app.lightBlack.dark' },
      },
    },
  },
};
