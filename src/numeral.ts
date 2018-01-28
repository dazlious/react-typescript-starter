import numeral from 'numeral';

export default numeral;

numeral.register('locale', 'de', {
    delimiters: {
        thousands: ' ',
        decimal: ',',
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't',
    },
    ordinal: n => {
        return '.';
    },
    currency: {
        symbol: '€',
    },
});
