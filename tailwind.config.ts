
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'handwriting': ['Caveat', 'cursive'],
				'playful': ['Kalam', 'cursive'],
				'casual': ['Patrick Hand', 'cursive'],
				'indie': ['Indie Flower', 'cursive'],
			},
			colors: {
				navy: {
					50: '#f0f4ff',
					100: '#e0eaff',
					200: '#c7d8ff',
					300: '#a5bdff',
					400: '#8098ff',
					500: '#5b73ff',
					600: '#4c63d2',
					700: '#3d4ba0',
					800: '#2d3373',
					900: '#1a1f47',
					950: '#0f1329',
				},
				cream: {
					50: '#fefcf3',
					100: '#fdf8e1',
					200: '#fbf0c4',
					300: '#f7e59b',
					400: '#f1d570',
					500: '#ebc849',
					600: '#d4af37',
					700: '#b8952d',
					800: '#96762a',
					900: '#7d6328',
				},
				sage: {
					50: '#f6f7f4',
					100: '#e9ebe4',
					200: '#d4d8cb',
					300: '#b8c0aa',
					400: '#98a485',
					500: '#7d8a68',
					600: '#626e52',
					700: '#4f5742',
					800: '#414837',
					900: '#373d30',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'organic': '45% 55% 60% 40% / 55% 45% 55% 45%',
				'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
				'wavy': '50% 50% 60% 40% / 25% 75% 25% 75%',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
					'50%': { transform: 'translateY(-5px) rotate(1deg)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(5px) rotate(-1deg)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite'
			},
			backgroundImage: {
				'paper': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f4ff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
				'dots': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e0eaff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
