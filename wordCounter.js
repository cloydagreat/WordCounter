

let dinput = document.querySelector("#input");
let character = document.querySelector("#character");
let word = document.querySelector("#word");
let sentence = document.querySelector("#sentence");
let para = document.querySelector("#paragraph");
let readingT = document.querySelector("#reading-time");

/*let bro = `my name is cloy. and thats why i love me. do you love cloy too? or you are playing
 dhwwloir uorpir uor
 eiorur
  kro[riruuur]`;*/

dinput.addEventListener("keyup", (e) =>{
    let bro = e.target.value;
   let guy = bro.split("").sort().join("").trim();
   let idan = guy.split("");
    character.innerHTML = "characters: " + idan.length;
});

dinput.addEventListener("keyup", (e) =>{
    let bro = e.target.value;
    let chief = bro.split(" ");
    word.innerHTML = "words: " + (chief.length -1);
});

dinput.addEventListener("keyup", (e) =>{
    let bro = e.target.value;
    let achief = bro.split(".");
    let oga = achief.map(test => {
        if(test.includes("?")){
            return test.split("?");
        }
        return test;
    }).flat();
 sentence.innerHTML = "sentence: " + (oga.length - 1);
});
  
dinput.addEventListener("keyup", (e) =>{
    let bro = e.target.value;
    let king = bro.split("\n");

    let queen = king.filter(prince => {
        return prince.trim() !== "";
    })
    para.innerHTML ="paragraph: " + queen.length;
});



dinput.addEventListener("keyup", (e) =>{
    let bro = e.target.value;
    let chief = bro.split(" ");
    let oga = chief.length
    let d = (oga/130)*60;
    function minNdsec(){
        let minutes = Math.floor(d / 60);
        let seconds = Math.floor(d % 60);

        let both = `${minutes}minutes ${seconds}seconds`;
        readingT.innerHTML = "reading time: " + both;
    }
    minNdsec();
});


//130 words per minute to read 
/*
for the reading time


let d = (260/130)*60;

function minNdsec(){
    let minutes = Math.floor(d / 60);
    let seconds = Math.floor(d % 60);

    let both = `${minutes}minutes ${seconds}seconds`;
    console.log(both);
}

minNdsec();*/













