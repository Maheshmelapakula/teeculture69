module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        branding: ['Great Vibes', 'cursive'],
      },
      colors: {
        orange: {
          light: '#FFA066',
          DEFAULT: '#FF6700',
          dark: '#CC5200',
        },
        teal: {
          light: '#B2DFDB',
          DEFAULT: '#00796B',
          dark: '#004D40',
        },
        neutral: {
          light: '#F5F5F5',
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
};
