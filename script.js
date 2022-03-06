// global var 

let apiQuotes = [];

// grab our elements from dom 
var quoteEl = document.getElementById('quote');
var authorEl = document.getElementById('author');
var buttonEl = document.getElementById('new-quote');
var twitterEl = document.getElementById('twitter')
var loaderEl = document.getElementById('loader');
var quoteContainer = document.getElementById('quote-container')



//event button 
buttonEl.addEventListener('click', newQuote);

// tweet button 
twitterEl.addEventListener('click', tweetQuote);

// functions 


// loader

function loader(){
    loaderEl.hidden = false;
    quoteContainer.hidden = true;
}

// hide loader 
function complete(){
    loaderEl.hidden = true;
    quoteContainer.hidden = false;
}

// show new quote 

function newQuote(){
    loader();
    // pick a random quote from api quotes array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)


    // display quote to dom 

    if(!quote.author){
        authorEl.textContent = 'Unknown'
    } else {
        authorEl.textContent = quote.author
    }

    if(quote.text.length > 150) {
        quoteEl.classList.add('long-quote')
    } else {
        quoteEl.classList.remove('long-quote')
    }

    // set quote , hide loader

    quoteEl.textContent = quote.text;
    complete();
    




}




// get our quotes from the api 

async function getQuotes(){
    loader();
    const apiUrl = 'https://type.fit/api/quotes';
    

    // try our fetch 
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        
    } catch(error){
//catch error 
        alert(error);
    }
}



// function to tweet quote 
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteEl.
    textContent} - ${authorEl.textContent}`;
    window.open(twitterUrl, '_blank');
}



// on load 

getQuotes();