/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'all': '0 0 10px 6px rgba(0, 0, 0, 0.25)', // custom all-around shadow
      },
    },
  },
  plugins: [],
}

