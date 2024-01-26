console.log('Working')

const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    return randomNumber;
}
console.log(randomNumber);
console.log(generateRandomNumber());
