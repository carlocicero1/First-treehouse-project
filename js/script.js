// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
	{
		text: 'Get busy living or get busy dying',
		source: 'Stephen King',
		citation: 'Different Seasons',
		year: '1982',
		catagory: 'Catagory: Inspirational'
	},
	{
		text: 'Twenty years from now you will be more disappointed by the things you didn\'t do than by the things you did do',
		source: 'Mark Twain',
		citation: '',
		year: '',
		catagory:'Catagory: Inspirational'
	},
	{
		text: 'Those who dare to fail miserably can achieve greatly',
		source: 'John F. Kennedy',
		citation: '',
		year: '',
		catagory: ''
	},
	{
		text: 'It is hard to fail, but it is worse never to have tried to succeed',
		source: ' Theodore Roosevelt',
		citation: '',
		year: '',
		catagory: ''
	},
	{
		text: 'Remember that the happiest people are not those getting more, but those giving more.',
		source: ' H. Jackson Brown, Jr.',
		citation: '',
		year: '',
		catagory: ''
	},
	{
		text: 'I just finally discovered what\'s wrong with my brain: on the left side of my brain there is nothing right and on the right side, there is nothing left. ',
		source: 'Anonymous',
		citation: '',
		year: '',
		catagory: 'Catagory: Humor'
	}
];
//new array for used quotes to get pushed into until all quotes have been generated once
var usedQuotes = [];

//generates random quotes
function getRandomQuote() {
	var index = Math.floor((Math.random() * quotes.length));
	var selectedQuote = quotes.splice(index, 1)[0];

	usedQuotes.push(selectedQuote);

	if(!quotes.length) {
		quotes = usedQuotes;
		usedQuotes = []
	}

	return selectedQuote;
}

// generates a new background color for the page and button
function generateRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
	console.log(rgb)
	document.body.style.backgroundColor = rgb;
	document.getElementById('loadQuote').style.backgroundColor = rgb;
	
}

function printQuote() {
	// Generate a random quote
	var quote = getRandomQuote();
	generateRandomColor();
	console.log(usedQuotes);
	// Get the DOM elements by ID
	document.getElementById('displayBox').innerHTML = quote.text;
	document.getElementById('quoteSource').innerHTML = quote.source;

	// If there is no citation, year, and catagory, do not show the properties.
	document.getElementById('citation').innerHTML = quote.citation || '';
	document.getElementById('year').innerHTML = quote.year || '';
	document.getElementById('catagory').innerHTML = quote.catagory || '';
}

// Initialize a quote
printQuote();
