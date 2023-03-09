let API_URL="https://api.adviceslip.com/advice";
function get(url) {return fetch(url).then(resp=>resp.json())}
let API={ get }

let quoteP = document.querySelector("p#quote")
let adviceNumber = document.querySelector("span#number")

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}
function addQuote(quote) {
    quoteP.innerText = quote;
    let fontsNum = Math.floor((Math.random()* 100) + 1);
    adviceNumber.innerText = fontsNum;}

let reloadPage = document.querySelector("div#reload")
reloadPage.addEventListener("click", ()=> getQuotes())

document.body.onload = getQuotes