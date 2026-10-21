import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ivory: '#F8F6F2',
        stone: '#ECE7DF',
        espresso: '#231F1B',
        charcoal: '#4D4843',
        gold: '#B89A63',
        button: '#1C1C1C',
        taupe: '#D9D1C7'
      },
      fontFamily: {
        serif: ['Canela Text Trial', 'Georgia', 'serif'],
        display: ['Neue Haas Grotesk Display Pro', 'Arial', 'sans-serif'],
        body: ['Neue Haas Grotesk Display Pro', 'Arial', 'sans-serif'],
        sans: ['Neue Haas Grotesk Display Pro', 'Arial', 'sans-serif']
      }
    }
  }
}
