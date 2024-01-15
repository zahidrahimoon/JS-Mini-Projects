
const qoute=[
    {text:"Fear him whom you hate.",author:"Imam Ali ibn Abi Talib"},
    {text:"The best among you are those who have the best manners and character.",author:" Prophet Muhammad (PBUH)"},
    {text:"Do not be a slave to others when Allah has created you free.",author:"Imam Ali ibn Abi Talib"},
    {text:"Patience is of two kinds: patience over what pains you, and patience against what you covet.",author:"Imam Ali ibn Abi Talib"},
    {text:"The strongest among you is the one who controls his anger.",author:"Prophet Muhammad (PBUH)"},
    {text:"Kindness is a mark of faith, and whoever is not kind has no faith.",author:"Prophet Muhammad (PBUH)"},
    {text:"Speak good or remain silent.",author:"Prophet Muhammad (PBUH)"},
    {text:"The world is a prison for a believer and paradise for a non-believer.",author:" Prophet Muhammad (PBUH)"},
    {text:"The cure for ignorance is to question.",author:" Imam Ali ibn Abi Talib"},
    {text:"He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere.",author:"Imam Ali ibn Abi Talib"},
]
function getRandomGreenShade() {
 const hue = 120; 
const saturation = Math.floor(Math.random() * 50) + 50;
const lightness = Math.floor(Math.random() * 30) + 40; 
return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function RandomGenerate(){
    let randomNumber=Math.floor(Math.random()*qoute.length);
    let randomQoutes=qoute[randomNumber];

    document.getElementById("qoute-text").innerHTML=randomQoutes.text;
    document.getElementById("author").innerHTML=`Author : ${randomQoutes.author}`;
    document.body.style.backgroundColor = getRandomGreenShade()
}

RandomGenerate();