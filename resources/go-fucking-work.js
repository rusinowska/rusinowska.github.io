var quotes = [
  "CHRZAŃ UFNĄ BELGIJSKOŚĆ, TĘP WYŻ-MŁÓDŹ!",
  "JEŻU KLĄTW, SPŁÓDŹ FINOM CZĘŚĆ GRY HAŃB!",
  "FAŁSZ TRWÓG: JUDŹ KLOMB, NĘĆ CHYŻĄ PIEŚŃ!",
  "FILMUJ RZEŹ ŻĄDAŃ, POŚĆ, GNĘB CHŁYSTKÓW!",
  "MAŃKUT, JEŚĆ! WŁÓŻ PCHLI SZYFON, GĘDŹ, RĄB!",
  "PÓJDŹ W LOCH ZABIĆ MAŁEŃSKĄ GĘŚ FUTRYN!",
  "O, MÓGŁŻE SĘP CHLAŃ WYJŚĆ FURTKĄ BŹDZIN!",
  "SKŁÓĆ BAŚŃ GRYPĄ, ZAWĘDŹ FLEJTUCHOM NIŻ!"
];

function getQuote () {
  return quotes[Math.floor(Math.random() * (quotes.length-1))];
}

function setQuote() {
  document.querySelector("#quote").textContent = getQuote();
}

window.onload = setQuote;