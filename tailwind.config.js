/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                mygray: '#454545',
                textgray: '#b5b59f',
                lightgray: '#eeeeee',
                bgblue: '#d9e8f7',
                darkblue: '#0066cc',
                ourgreen: '#6b9e1f'

            }
        },
    },
    safelist: [{
        pattern: /.*/
    }],
    plugins: [],
}