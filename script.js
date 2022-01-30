//Functions
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

function shuffle(array) {
    let currInd = array.length, tempVal, randInd;
    while (0 !== currInd) {
        randInd = Math.floor(Math.random() * currInd);
        currInd--;
  
        tempVal = array[currInd];
        array[currInd] = array[randInd];
        array[randInd] = tempVal;
    }
    return array;
}

function refresh(arr) {
    table.innerHTML = ''
    arr.forEach((card,ind) => {
    if(ind%6===0)
        tr = document.createElement('tr')
    td = document.createElement('td')
    img = document.createElement('img')
    img.alt = card
    img.src = `img/${card}.jpg`
    td.appendChild(img)
    tr.appendChild(td)
    if(ind%6===0)
        table.appendChild(tr)
    })
}


let cards = []
for(let i=0; i<9; i++){
    cards.push(`avenger${i+1}`)
}
cards = cards.concat(cards)

let table = document.querySelector('#cards')
let tr, td, img
shuffeledCards = shuffle(cards)
refresh(shuffeledCards)



//EventListeners
document.querySelector('#newgame').addEventListener("click", () =>{
    shuffeledCards = shuffle(cards)
    refresh(shuffeledCards)
    console.log(shuffeledCards)
})
