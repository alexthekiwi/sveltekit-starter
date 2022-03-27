module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    theme: {
        fontFamily: {
            sans: ['Inter', 'Helvetica', 'sans-serif'],
        },
        extend: {
            colors: {
                //
            },
            typography: {
                DEFAULT: {
                    css: {
                        p: {
                            color: 'inherit',
                        },
                        h1: {
                            color: 'inherit',
                            fontWeight: 700,
                        },
                        h2: {
                            color: 'inherit',
                        },
                        h3: {
                            color: 'inherit',
                        },
                        h4: {
                            color: 'inherit',
                        },
                    }
                }
            }
        },
        container: {
            center: true,
            padding: '1.25rem',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
