

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;


export const getDayFormatted = () => {

    let day = generateRandomNumber(1,29);

    if(day < 10){
        return '0' + day;
    }

    return day;
}

export const getMonthFormatted = () => {
    let month = generateRandomNumber(1,12);

    if(month < 10){
        return '0' + month;
    }

    return month;
}
