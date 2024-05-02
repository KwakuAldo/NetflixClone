/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "600px",
      lg: "1024px",
      xl: "1280px",
    },
  
    extend: {
      colors: {
        netflixRed: 'rgb(229, 9, 20)',
        greyishBlack: 'rgb(35,35,35)'
      },
      backgroundImage: {
        'hero-image': "url('/images/Hero Image.png')"
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.9, 0.51, 1)',
      },
      maxWidth: {
        'custom': 'calc(100% - 3rem)',
      },
      spacing: {
        'custom': 'calc(100% + 0.75rem)',
        'basisW': 'calc(50% - 0.75rem)'
      }
    },
  },
  plugins: [],
}

