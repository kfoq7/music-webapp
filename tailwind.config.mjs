/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gray-silver': '#919191',
        'gray-steel': '#464748',
        'gray-charcoal': '#1d1d1d'
      }
    }
  },
  plugins: []
}
