// global var 

let apiQuotes = [];

// grab our elements from dom 
var quoteEl = document.getElementById('quote');
var authorEl = document.getElementById('author');
var buttonEl = document.getElementById('new-quote');
var twitterEl = document.getElementById('twitter')

//event button 
buttonEl.addEventListener('click', newQuote);

// tweet button 
twitterEl.addEventListener('click', tweetQuote);

// show new quote 

function newQuote(){

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
    quoteEl.textContent = quote.text
    




}




// get our quotes from the api 

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    

    // try our fetch 
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        
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