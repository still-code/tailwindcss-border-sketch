module.exports = function () {
    return function({ addUtilities }) {
        const sketchyBorders = {
            '.border-sketchy-sm': {
                borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
                transition: 'all 0.3s ease-in-out'
            },
            '.border-sketchy-md': {
                borderRadius: '25px 55px 10px 45px/85px 20px 55px 20px',
                transition: 'all 0.3s ease-in-out'
            },
            '.border-sketchy-lg': {
                borderRadius: '5px 55px 25px 25px/85px 20px 55px 20px',
                transition: 'all 0.3s ease-in-out'
            },
        }

        addUtilities(sketchyBorders, {
            variants: ['responsive', 'hover'],
        })
    }
}
