module.exports = {
    plugins: {
      'postcss-preset-mantine': {},
      'postcss-simple-vars': {
        variables: {
          'mantine-breakpoint-xs': '36em',
          'mantine-breakpoint-sm': '48em',
          'mantine-breakpoint-md': '62em',
          'mantine-breakpoint-lg': '75em',
          'mantine-breakpoint-xl': '88em',
          '--mantine-color-green-1':'#8ABB54',
          '--mantine-color-green-2':'#054004',
          '--mantine-color-green-3':'#406442',
          '--mantine-color-green-4':'#005745',
          '--mantine-color-orange-1':'#FF5E1E',
        },
      },
    },
  };