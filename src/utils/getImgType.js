export const getImgKind = (index) => {

    let initialDigit = index.toString().charAt(0);

    const kind = ['Brazil', 'Forest', 'Paris', 'California', 'Vancouver', 'Tokyo', 'Australia', 'Africa', 'London', 'Santiago']

    return kind[initialDigit];
}