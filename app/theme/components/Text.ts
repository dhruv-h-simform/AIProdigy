const theme = {
  _light: { color: 'app.lightBlack.light' },
  _dark: { color: 'app.lightBlack.dark' },
};

const textVariant = {
  ['heading']: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 32,
    _important: {
      ...theme,
    },
  },
  ['sub-heading']: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 24,
    _important: {
      ...theme,
    },
  },
  ['title']: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 20,
    _important: {
      ...theme,
    },
  },
  ['normal']: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16,
    _important: {
      ...theme,
    },
  },
  ['default']: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 13,
    _important: {
      ...theme,
    },
  },
  ['bold']: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 16,
    _important: {
      ...theme,
    },
  },
  ['light']: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 12,
    opacity: 0.5,
    _important: {
      ...theme,
    },
  },
  ['semi-bold']: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 14,
    _important: {
      ...theme,
    },
  },
  ['small']: {
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 11,
    ...theme,
  },
};

export default {
  baseStyle: ({ variant }: TextVariants): any => {
    return textVariant?.[variant];
  },
};

interface TextVariants {
  variant: keyof typeof textVariant;
}
