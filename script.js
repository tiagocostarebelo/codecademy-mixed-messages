//get the button via ID
const generateBtn = document.getElementById('generate-btn');

/* set the Event Listener on the button
it waits for the click, then using the arrow fucntion we pass the reference to the function retrieveMessage
and pass the inspirational object as argument */
generateBtn.addEventListener('click', () => retrieveMessage(inspirational));

//function that generates a random number using the arugment num (number passed)
const generateRandomNumber = (num) => {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

const inspirational = {
    quotes: [
        "Believe in yourself.",
        "The only limit is your mind.",
        "Success is a journey, not a destination.",
        "Dream big, work hard, stay focused.",
        "Your attitude determines your direction.",
        "The only way to do great work is to love what you do.",
        "In the middle of every difficulty lies opportunity.",
        "You are capable of more than you know.",
        "The secret of getting ahead is getting started.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Don't watch the clock; do what it does. Keep going.",
        "The only place where success comes before work is in the dictionary.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Do something today that your future self will thank you for.",
        "It's going to be hard, but hard does not mean impossible."
    ],
    advice: [
        "Take one step at a time.",
        "Embrace challenges as opportunities.",
        "Learn from your mistakes.",
        "Stay committed to your goals.",
        "Focus on progress, not perfection.",
        "Believe in your abilities.",
        "Trust the timing of your life.",
        "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
        "The only way to achieve the impossible is to believe it is possible.",
        "Don't wait for opportunity. Create it.",
        "You don't have to be great to start, but you have to start to be great.",
        "Success is the sum of small efforts repeated day in and day out.",
        "If you want to achieve greatness, stop asking for permission.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Don't stop when you're tired. Stop when you're done.",
        "Difficult roads often lead to beautiful destinations.",
        "The key to success is to focus on goals, not obstacles.",
        "Your attitude determines your direction.",
        "You are never too old to set another goal or to dream a new dream.",
        "Success doesn't just find you. You have to go out and get it."
    ],
    affirmations: [
        "I am capable of achieving my goals.",
        "I attract positivity into my life.",
        "I am resilient and strong.",
        "Every day, I am becoming a better version of myself.",
        "I radiate confidence, self-respect, and inner harmony.",
        "I am in charge of how I feel and today I am choosing happiness.",
        "I am worthy of all the good things that come into my life.",
        "I am overflowing with energy, vitality, and joy.",
        "I am surrounded by love and abundance.",
        "I am deserving of success and happiness.",
        "I am courageous and I stand up for myself.",
        "I am confident in my abilities to overcome challenges.",
        "I trust myself to make the right decisions.",
        "I am grateful for every experience that has brought me to this point.",
        "I am the architect of my life; I build its foundation and choose its contents.",
        "I am surrounded by people who encourage and support me.",
        "I am attracting endless opportunities into my life.",
        "I am creating a life filled with love and abundance.",
        "I am at peace with who I am and where I am going.",
        "I am capable of achieving anything I set my mind to."
    ],
};


// main function retrieveMessage, receives the object as an argument
function retrieveMessage(objArr) {
    //here we check that the object contains the expect properties and return if it doesn't
    if (!('quotes' in objArr && 'advice' in objArr && 'affirmations' in objArr)) {
        console.error("Input object does not contain expected properties.");
        return;
    }

    // initiate the new object that will receive the generated messages
    let individualMessage = {};
    /* for each category in the object, we'll check its length, and pass it as the parameter
    to the generateRandomNumber function to generate a random number 
    that will be used to get the index of each category array
    we then save the category to the new object, 
    as well as the respective index from the original object array
    finally we invoke the updateUi function by passing the new and updated individualmessage object*/
    for (let category in objArr) {
        let indexValue = generateRandomNumber(objArr[category].length);
        individualMessage[category] = objArr[category][indexValue];
    }
    updateUi(individualMessage);
}

/*function to update the ui, by receiving the parameter messages which is an object  
with each category and its own message that we then use to update the User interface */
const updateUi = (messages) => {
    const quoteParagraph = document.querySelector('.dynamic-quote');
    quoteParagraph.innerText = messages.quotes || 'No quotes available';
    
    const adviceParagraph = document.querySelector('.dynamic-advice');
    adviceParagraph.innerText = messages.advice || 'No advice available';

    const affirmationParagraph = document.querySelector('.dynamic-affirmation');
    affirmationParagraph.innerText = messages.affirmations || 'No affirmations available';
}








