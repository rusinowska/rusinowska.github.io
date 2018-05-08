var quotes = [
  "CHRZAŃ UFNĄ BELGIJSKOŚĆ, TĘP WYŻ-MŁÓDŹ",
  "JEŻU KLĄTW, SPŁÓDŹ FINOM CZĘŚĆ GRY HAŃB",
  ""
];

function getQuote () {
  return quotes[Math.floor(Math.random() * (quotes.length-1))];
}

function setQuote() {
  document.querySelector("#quote").textContent = getQuote();
}

window.onload = setQuote;