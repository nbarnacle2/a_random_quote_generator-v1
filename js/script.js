const quote1 ={
  quote: 'Do you think love can bloom, even on a battlefield?',
  source: 'Otacon',
  citation: 'Metal Gear Solid',
  year: 1998
};
const quote2={
  quote: 'It’s easy to forget what a sin is in the middle of a battlefield.',
  source: 'Metal Gear Solid',
  year: 1998
};
const quote3={
  quote: '“I’ve never fought for anyone but myself.”',
  citation: 'Metal Gear Solid',
  source: 'Solid Snake',
  year: 1998
};
const quote4={
  quote: 'Nanomachines, son! They harden in response to physical trauma. You cant hurt me, Jack!',
  source: 'Metal Gear Rising',
  year: 2013
};
const quote5={
  quote: 'Everyone withdraws into their own small gated community, afraid of a larger forum. They stay inside their little ponds, leaking whatever "truth" suits them.',
  source: 'Metal Gear Solid 2',
  year: 2001
};
document.getElementById('load-quote').addEventListener("click", printQuote, false);
var quotes = new Array(quote1, quote2, quote3, quote4, quote5);

function getRandomQuote(){
var random = Math.floor(Math.random()*5);
return quotes[random];
}

function printQuote(){
  var q = getRandomQuote();
  console.log(q.quote);
  var p = '<p class="quote">' + q.quote + '</p> <p class="source">' + q.source + '</p>'
  if(q.citation){
    p = '<p class="quote">' + q.quote + '</p> <p class="source">' + q.source +   '<span class="citation">' +q.citation + '</span> </p>' 
  }
  if(q.year){
    p = '<p class="quote">' + q.quote + '</p> <p class="source">' + q.source + '<span class="year">' +q.year + '</span> </p>'
  }
  if(q.year && q.citation){
    p = '<p class="quote">' + q.quote + '</p> <p class="source">' + q.source +'<span class="citation">' +q.citation + '</span> <span class="year">' +q.year + '</span> </p>'
  }
 
 
  document.getElementById('quote-box').innerHTML = p;

}

