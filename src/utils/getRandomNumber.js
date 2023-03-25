

const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const getDayFormatted = (min) => {

    let day = generateRandomNumber(min, 29);

    if (day < 10) {
        return '0' + day;
    }

    return day.toString();
}

export const getMonthFormatted = (min) => {

    let month = generateRandomNumber(min, 12);


    if (month < 10) {
        return '0' + month;
    }

    return month.toString();
}
