/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ["inter"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-btn-orangeLight' : '#E9C289',
        'bg-btn-orange' : '#DEA755',
        'bg-btn-orangeHover' : '#D89127',
        'bg-blueLight' : '#A4E3D6',
        'bg-blue' : '#74DBC6',
        'bg-blueDark' : '#1FC7A4',
        'bg-greenLight' : '#B4E07D',
        'bg-green' : '#9CDC4B',
        'bg-greenDark' : '#78C318',
        'bg-chart' : '#8884D8',
      }
    },
  },
  plugins: [],
}
