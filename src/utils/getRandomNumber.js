

const generateRandomNumber = (min, max) => {
    const random = Math.random();

    const difference = max - min;

    const randomInsideRange = (Math.round(difference * random) + min);

    return randomInsideRange
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
