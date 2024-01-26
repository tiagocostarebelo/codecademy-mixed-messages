let individualMessage = [];

const generateRandomNumber = (num) => {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

const inspirational = {
    quotes: ["Believe in yourself.", "The only limit is your mind.", "Success is a journey, not a destination.", "Dream big, work hard, stay focused.", "Your attitude determines your direction."],
    advice: ["Take one step at a time.", "Embrace challenges as opportunities.", "Learn from your mistakes.", "Stay committed to your goals.", "Focus on progress, not perfection."],
    affirmations: ["I am capable of achieving my goals.", "I attract positivity into my life.", "I am resilient and strong.", "Every day, I am becoming a better version of myself.", "I radiate confidence, self-respect, and inner harmony."],
};


function retrieveMessage(objArr) {
    for (let element in objArr) {
        let indexValue = generateRandomNumber(objArr[element].length);
    
        switch(element) {
            case 'quotes':
                individualMessage.push(`Today's quote is: ${objArr[element][indexValue]}`);
                break;
            case 'advice':
                individualMessage.push(`The advice we have for you: ${objArr[element][indexValue]}`);
                break;
            case 'affirmations':
                individualMessage.push(`Tell yourself: ${objArr[element][indexValue]}`);
                break; 
        }
    }

    const finalMessage = individualMessage.join('\n');
    console.log(finalMessage);
}

retrieveMessage(inspirational);







