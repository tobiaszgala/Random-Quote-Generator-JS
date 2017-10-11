/* eslint-env browser */
// array of objects
var quotes = [
    { 
        quote: "Political correctness is tyranny with manners", 
        source: "Charlton Heston", 
        citation: "Speech at Brandels University",
        year: 1999,
        tag: "Politics"
    },
    { 
        quote: "Not everything that can be counted counts, and not everything that counts can be counted", 
        source: "Albert Einstein",
        tag: "Science"
    },
    { 
        quote: "You may not be interested in war, but war is interested in you",
        source: "Leon Trotsky",
        citation: "Publication: In Defense of Marxism Part VII",
        year: 1942,
        tag: "War"
    },
    { 
        quote: "The artist is nothing without the gift, but the gift is nothing without work",
        source: "Emile Zola",
        tag: "Art"
    },
    { 
        quote: "Problems worthy of attack prove their worth by fighting back",
        source: "Paul Erdos",
        tag: "Problems"
    }
];

// array which holds quotes that has been viewed
var viewedQuotes = [];

// this function returns random number based on parameters
function randomNumber(startNum, endNum) {   
    // return random number with start and end number
    // this function is used to select random quote and set rgb value for the background
    return Math.floor(Math.random() * endNum) + startNum;
}

function randomBackground() {
    // variables to hold color values
    var red, green, blue;
    // generate random values for each color
    red = randomNumber(0, 255);
    green = randomNumber(0, 255);
    blue = randomNumber(0, 255);
    // set background with rgb values
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

// function generates random quote with no duplicates
function getRandomQuote() {
    // generate random number from 0 to length of quote array
    var randomQuoteNum = randomNumber(0, quotes.length);
    // delete random quote from original array and store it in the variable
    // splice function return array so we need to return the first item in order to have an object
    var randomQuote = quotes.splice(randomQuoteNum, 1)[0];
    // push random quote object at the end of viewedQuote array
    viewedQuotes.push(randomQuote);
    
    // check if original quote array is empty
    if (quotes.length === 0) {
        // if it is empty copy viewedQuotes value to original array
        quotes = viewedQuotes;
        // reset viewedQuotes array
        viewedQuotes = [];
    }
    
    // return quote object
    return randomQuote;
}

function printQuote() {
    // get random quote
    var randomQuote = getRandomQuote();
    
    // generate html code
    var html = '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source;
    // if quote has "citation" property and it's not empty add html
    if (randomQuote.hasOwnProperty('citation') && randomQuote.citation !== "") {
        html += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    // if quote has "year" property and it's not empty add html
    if (randomQuote.hasOwnProperty('year') && randomQuote.year !== "") {
        html += '<span class="year">' + randomQuote.year + '</span>';
    }
    // adding tag to the page
    html += '<p>Category: ' + randomQuote.tag + '</p>';
    html += '</p>';
    
    // display html code
    document.getElementById('quote-box').innerHTML = html;
    // generate new background
    randomBackground();
}

// invoking printQuote function to display quote object
printQuote();
// generate quote every 10 seconds
window.setInterval(printQuote, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);