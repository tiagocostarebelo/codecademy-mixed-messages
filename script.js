console.log('Working')

const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
};

const messages = {
    quotes: ["Believe in yourself.", "The only limit is your mind.", "Success is a journey, not a destination."],
    advice: ["Take one step at a time.", "Embrace challenges as opportunities.", "Learn from your mistakes."],
    affirmations: ["I am capable of achieving my goals.", "I attract positivity into my life.", "I am resilient and strong."],
};

const messageSelector = (idx, objArrays) => {
    return `Your quote is: ${objArrays.quotes[idx]}. The advice for you today is ${objArrays.advice[idx]}. Your affirmation is ${objArrays.affirmations[idx]}`

}

console.log(messageSelector(2, messages));



