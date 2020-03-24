const borders = [0, '1px solid', '2px solid', '10px solid', '20px solid'];

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  radii: [0, 2, 4, 8, 16],
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, 0.125)',
  },
  variants: {
    card: {
      p: 2,
      bg: 'white',
      boxShadow: 'card',
      borderRadius: 4,
      border: 1,
    },
    badge: {
      display: 'inline-block',
      p: 1,
      color: 'black',
      bg: 'white',
      borderRadius: 4,
      borderColor: 'black',
    },
  },
  colors: {
    main: '#e8b504',
    secondary: '#D87800',
    black: '#333',
    dark: '#000',
    white: '#fff',
  },
  borders,
  fonts: {
    futura: 'futura',
  },
};

export default theme;
