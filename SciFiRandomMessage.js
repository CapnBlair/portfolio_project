//create array variables for 3 parts of the phrase
const openning = ['You', 'I', 'We', 'They']; //***replace placeholder strings when ready***
const middle = ['underestimate', 'have a bad feeling', 'can rebuild him', 'cannot stop us']; //***replace placeholder strings when ready***
const ending = ['the power of the darkside.', 'about this.', 'we have the technology.', 'all']; //***replace placeholder strings when ready***

//variables for output strings
let finalOpen = '';
let finalMiddle = '';
let finalEnd = '';

//create a function to draw a random string from each array and log them
const RandomPhrase = () => {
   finalOpen = openning[Math.floor(Math.random() * openning.length)];
   finalMiddle = middle[Math.floor(Math.random() * middle.length)];
   finalEnd = ending[Math.floor(Math.random() * ending.length)];
   console.log(`${finalOpen} ${finalMiddle} ${finalEnd}`);
};

//call the function
RandomPhrase();