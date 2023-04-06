/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      bg: '#282828',
      fg: '#ebdbb2',
      red: '#cc241d',
      green: '#98971a',
      yellow: '#d79921',
      blue: '#458588',
      purple: '#b16286',
      aqua: '#689d6a',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
