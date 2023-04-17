export default {
  variants: {
    rounded_solid: {
      _light: { bg: 'app.primary.light' },
      _dark: { bg: 'app.primary.dark' },
      h: 54,
      _web: { h: 45 },
      borderRadius: 30,
      _text: {
        fontWeight: '600',
        color: 'app.white.light',
      },
      _hover: {
        _text: {
          _light: {
            color: 'app.white.light',
          },
          _dark: {
            color: 'app.white.light',
          },
        },
        _light: { opacity: 0.5 },
        _dark: { opacity: 0.5 },
      },
      _pressed: {
        _light: { opacity: 0.5 },
        _dark: { opacity: 0.5 },
      },
    },
    link: {
      _text: {
        _dark: { color: 'app.primary.light' },
        _light: { color: 'app.primary.light' },
      },
      _hover: {
        _dark: { opacity: 0.5 },
        _light: { opacity: 0.5 },
      },
      _pressed: {
        _dark: { opacity: 0.5 },
        _light: { opacity: 0.5 },
      },
    },
    bordered: {
      h: 54,
      _text: {
        fontWeight: '600',
        _light: { color: 'app.primary.light' },
        _dark: { color: 'app.primary.dark' },
      },
      _hover: {
        _light: { bg: 'app.primary.light' },
        _dark: { bg: 'app.primary.dark' },
        _text: {
          _light: { color: 'app.white.light' },
          _dark: { color: 'app.white.light' },
        },
        borderColor: 'transparent',
      },
      _pressed: {
        _light: { bg: 'app.primary.light' },
        _dark: { bg: 'app.primary.dark' },
        _text: {
          _light: { color: 'app.white.light' },
          _dark: { color: 'app.white.light' },
        },
        borderColor: 'transparent',
      },
      _light: { borderColor: 'app.primary.light' },
      _dark: { borderColor: 'app.primary.dark' },
      borderWidth: 1,
    },
    rounded_outline: {
      h: 54,
      _text: {
        fontWeight: '600',
        _light: { color: 'app.primary.light' },
        _dark: { color: 'app.white.light' },
      },
      _hover: {
        _text: {
          _light: {
            color: 'app.white.light',
          },
          _dark: {
            color: 'app.white.light',
          },
        },
        _light: { bg: 'app.primary.light' },
        _dark: { bg: 'app.primary.dark' },
        borderColor: 'transparent',
      },
      _pressed: {
        _text: {
          _light: {
            color: 'app.white.light',
          },
          _dark: {
            color: 'app.white.light',
          },
        },
        _light: { bg: 'app.primary.light' },
        _dark: { bg: 'app.primary.dark' },
        borderColor: 'transparent',
      },
      _light: { borderColor: 'app.primary.light' },
      _dark: { borderColor: 'app.white.light' },
      borderWidth: 1,
      borderRadius: 30,
    },
    filled: {
      h: 54,
      _light: {
        bg: 'app.primary.light',
        _text: {
          color: 'app.white.light',
        },
      },
      _dark: { bg: 'app.primary.dark', color: 'app.white.light' },
      _hover: {
        _text: {
          _light: {
            color: 'app.white.light',
          },
          _dark: {
            color: 'app.white.light',
          },
        },
        _light: { opacity: 0.5 },
        _dark: { opacity: 0.5 },
      },
      _pressed: {
        _text: {
          _light: {
            color: 'app.white.light',
          },
          _dark: {
            color: 'app.white.light',
          },
        },
        _light: { opacity: 0.5 },
        _dark: { opacity: 0.5 },
      },
    },
  },
};
