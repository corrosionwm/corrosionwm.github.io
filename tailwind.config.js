/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      bg: '#282a36',
      cl: '#44475a',
      fg: '#f8f8f2',
      comment: '#6272a4',
      cyan: '#8be9fd',
      green: '#50fa7b',
      orange: '#ffb86c',
      pink: '#ff79c6',
      purple: '#bd93f9',
      red: '#ff5555',
      yellow: '#f1fa8c',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
