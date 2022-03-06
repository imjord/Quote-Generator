// global var 

let apiQuotes = [];

// grab our elements from dom 
var quoteEl = document.getElementById('quote');
var authorEl = document.getElementById('author');
var buttonEl = document.getElementById('new-quote');


//event button 
buttonEl.addEventListener('click', newQuote);

// show new quote 

function newQuote(){

    // pick a random quote from api quotes array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)


    // display quote to dom 

    quoteEl.textContent = quote.text
    authorEl.textContent = quote.author




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

// on load 

getQuotes();