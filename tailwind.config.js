const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            plg: '450px',
            sm: '600px',
            md: '768px',
            lg: '1024px',
            lgtall: { raw: '(orientation: portrait) and (min-width: 1024px)' },
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            '2k': '2000px',
            '2k3': '2300px',
        },
        fontWeight: {
            light: '350',
            normal: '450',
            medium: '550',
            semibold: '650',
            bold: '750',
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            black: 'black',
            white: 'white',
            red: 'var(--color-red)',
            'red-shade': '#b51c36',
            blue: 'var(--color-blue)',
            orange: '#E58600',
            purple: {
                25: '#fbf8fc',
                200: '#c692d8',
                300: '#B169C9',
                400: '#9f47bd',
                700: '#821fa3',
                900: '#6d148a',
                1000: '#590e72',
            },
            gray: {
                1: '#fafbfc',
                25: '#EDEFF2',
                400: '#78819B',
                500: '#6a7182',
                600: '#585f73',
                700: '#454D63',
                800: '#1f2937',
                900: '#111827',
            },
        },
        fontSize: {
            xs: ['0.875rem', '1.43'], // 14px
            sm: ['1rem', '1.5'], // 16px
            base: ['1.125rem', '1.56'], // 18px
            lg: ['1.25rem', '1.4'], // 20px
            xl: ['1.5rem', '1.33'], // 24px
            '2xl': ['1.875rem', '1.2'], // 30px
            '3xl': ['2.25rem', '1.11'], // 36px
            '4xl': ['3rem', '1'], // 48px
            '5xl': ['3.75rem', '1'], // 60px
            '6xl': ['4.5rem', '1'], // 72px
        },
        spacing: {
            0: '0',
            1: '1px',
            2: '2px',
            4: '4px',
            6: '6px',
            8: '8px',
            10: '10px',
            12: '12px',
            14: '14px',
            16: '16px',
            20: '20px',
            24: '24px',
            28: '28px',
            32: '32px',
            36: '36px',
            40: '40px',
            44: '44px',
            48: '48px',
            52: '52px',
            56: '56px',
            60: '60px',
            64: '64px',
            72: '72px',
            80: '80px',
            96: '96px',
        },
        extend: {
            borderWidth: {
                3: '3px',
                5: '5px',
                6: '6px',
            },
            fontFamily: {
                brand: 'Dancing\\ Script',
                slab: ['Slabo\\ 13px', ...defaultTheme.fontFamily.serif],
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                1: '0.02rem',
                2: '0.04rem',
                3: '0.06rem',
                4: '0.08rem',
            },
            typography: {
                sm: {
                    css: {
                        fontSize: '0.875rem',
                        // lineHeight: '1.7142857' or 24px
                        // use gap-[0.4rem] for simulating with flexbox columns
                    },
                },
                DEFAULT: {
                    css: {
                        fontSize: '1rem',
                        // lineHeight: '1.75' or 28px
                        // use gap-[0.4rem] for simulating with flexbox columns
                    },
                },
                base: {
                    css: {
                        fontSize: '1rem',
                        // lineHeight: '1.75' or 28px
                        // use gap-[0.4rem] for simulating with flexbox columns
                    },
                },
                lg: {
                    css: {
                        fontSize: '1.125rem',
                        lineHeight: '1.55',
                        // use gap-[0.4rem] for simulating with flexbox columns
                    },
                },
                xl: {
                    css: {
                        fontSize: '1.25rem',
                        lineHeight: '1.55',
                        // use gap-[0.8rem] for simulating with flexbox columns
                    },
                },
                '2xl': {
                    css: {
                        fontSize: '1.5rem',
                        // lineHeight: '1.6666667' or 40px
                        // use gap-[0.8rem] for simulating with flexbox columns
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
