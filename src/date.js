function daysInMonth(month, year) {
    return new Date(year, month+1, 0).getDate();
}

function firstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

export { daysInMonth, firstDayOfMonth, months, weekdays };