/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		spacing: {
			'3.2':'0.2rem',
  			'6': '0.375rem',
			'7':'0.438rem',
  			'9': '0.563rem',
			'11': '0.688rem',
			'14': '0.875rem',
			'18':'1.125rem',
  			'22': '1.375rem',
  			'23': '1.438rem',
  			'24': '1.5rem',
  			'25': '1.563rem',
  			'26': '1.625rem',
			'27': '1.688rem',
  			'28': '1.75rem',
			'29': '1.813rem',
			'30': '1.875rem',
  			'32': '2rem',
  			'33': '2.063rem',
  			'34': '2.125rem',
			'35': '2.188rem',
  			'36': '2.25rem',
  			'38': '2.375rem',
  			'40': '2.5rem',
  			'41': '2.563rem',
			'44': '2.75rem',
			'45': '2.813rem',
  			'47': '2.938rem',
  			'48': '3rem',
			'49': '3.063rem',
			'51': '3.188rem',
  			'52': '3.25rem',
			'53': '3.313rem',
  			'54': '3.375rem',
			'55': '3.438rem',
  			'56': '3.5rem',
  			'57': '3.563rem',
			'60': '3.75rem',
			'64': '4rem',
			'70': '4.375rem',
  			'76': '4.75rem',
  			'78': '4.875rem',
			'79': '4.938rem',
  			'80': '5rem',
			'83': '5.188rem',
  			'84': '5.25rem',
  			'86': '5.375rem',
  			'87': '5.438rem',
			'88': '5.5rem',
  			'89': '5.563rem',
			'94': '5.875rem',
			'95': '5.938rem',
			'99': '6.188rem',
			'100': '6.25rem',
			'111': '6.938rem',
			'117': '7.313rem',
			'120': '7.5rem',
  			'122': '7.625rem',
			'123': '7.688rem',
  			'124': '7.75rem',
			'129': '8.063rem',
  			'135': '8.438rem',
			'137': '8.563rem',
			'140': '8.75rem',
			'155': '9.688rem',
  			'171': '10.688rem',
			'179': '11.188rem',
  			'182': '11.375rem',
			'193': '12.063rem',
  			'194': '12.125rem',
  			'198': '12.375rem',
  			'216': '13.5rem',
  			'218': '13.625rem',
			'233': '14.563rem',
			'244': '15.25rem',
			'270': '16.875rem',
  			'291': '18.188rem',
			'331': '20.688rem',
  			'360': '22.5rem',
  			'364': '22.75rem',
			'383': '23.938rem',
  			'414': '25.875rem',
  			'444': '27.75rem',
  			'459': '28.688rem',
			'460': '28.75rem',
  			'482': '30.125rem',
			'508': '31.75rem',
			'529': '33.063rem',
			'540': '33.75rem',
	        '548': '34.25rem',
			'573': '35.813rem',
  			'603': '37.688rem',
			'628': '39.25rem',
			'635': '39.688rem',
			'647': '40.438rem',
			'651': '40.688rem',
			'653': '40.813rem',
			'759': '47.438rem',
  			'806': '50.375rem',
			'835': '52.188rem',
			'958': '59.875rem',
			'968': '60.5rem',
			'1007': '62.938rem',
  			'1434': '89.625rem',
  			'1556': '97.25rem',
  			'1728': '108rem'
  		},
  		colors: {
  			rose: '#C14E77',
  			kisses: '#411528',
  			claret: '#7E1037',
  			pink: '#F7B2CF',
  			zov: '#F8EAF1',
  			plum: '#710C21',
  			plum20: '#41152833',
  			ipkland: '#FFEEF5',
  			a24c61: '#A24C61',
  			'710c21': '#710C21',
  			
        background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
			'10':'0.625rem',
  			'15': '0.938rem',
  			'20': '1.25rem',
  			'30': '1.875rem',
  			'40': '2.5rem',
  			'60': '3.75rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		borderWidth: {
  			'1': '0.063rem',
  			'3': '0.188rem'
  		},
  		fontFamily: {
  			mons: ["Montserrat Alternates", "sans-serif"],
  			uncage: ['UNCAGE']
  		},
  		fontSize: {
			'8': '0.5rem',
			'12': '0.75rem',
  			'16': '1rem',
  			'20': '1.25rem',
  			'24': '1.5rem',
  			'28': '1.75rem',
  			'32': '2rem',
  			'36': '2.25rem',
  			'44': '2.75rem',
			'60': '3.75rem',
  			'64': '4rem'
  		},
  		lineHeight: {
			'32':'2rem',
  			'72': '4.5rem'
  		},
  		boxShadow: {
  			'category-shadow': '3px 5px 4px 0px #710C2133'
  		},
  		backdropBlur: {
  			'4': '0.25rem'
  		},
		rotate: {
			'28':'28deg'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

