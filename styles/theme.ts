import { Theme } from '@emotion/react';

const color = {
  primary: '#FFC600',
  'primary-light': '#fdf4da',
  'primary-dark': '#b39e00',
};

const theme: Theme = {
  color: {
    primary: color.primary,
    'primary-light': color['primary-light'],
    'primary-dark': color['primary-dark'],
  },
};

export default theme;
