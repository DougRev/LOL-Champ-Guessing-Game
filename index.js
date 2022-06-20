
import { CHAMPIONS } from "./champions.js";
import { LOLCHAMPIONS } from "./mychamps.js";

const MaxGuesses = 1;
let guessesRemaning = MaxGuesses;
document.getElementById("champ-btn").onclick = function() {champReveal()};
document.getElementById("lane-btn").onclick = function() {laneReveal()};
document.getElementById("role-btn").onclick = function() {roleReveal()};
document.getElementById("passive-btn").onclick = function() {passiveHint()};
document.getElementById("q-btn").onclick = function() {qHint()};
document.getElementById("w-btn").onclick = function() {wHint()};
document.getElementById("e-btn").onclick = function() {eHint()};
document.getElementById("r-btn").onclick = function() {rHint()};



function randomChamp(){
    const randomChamp = LOLCHAMPIONS[Math.floor(Math.random() * LOLCHAMPIONS.length)];
    //const randomChamp = CHAMPIONS[Math.floor(Math.random() * CHAMPIONS.length)];
    console.log(randomChamp.name);
    document.getElementById("champ").innerHTML = randomChamp.name;
    document.getElementById("lane").innerHTML = randomChamp.lane;
    document.getElementById("role").innerHTML = randomChamp.role;
    document.getElementById("passive").innerHTML = randomChamp.passive;
    document.getElementById("q").innerHTML = randomChamp.q;
    document.getElementById("w").innerHTML = randomChamp.w;
    document.getElementById("e").innerHTML = randomChamp.e;
    document.getElementById("r").innerHTML = randomChamp.r;
    
}

function champReveal(){
    document.getElementById("champ").style.display='block';
}

function laneReveal(){
    document.getElementById("lane").style.display='block';
}

function roleReveal(){
    document.getElementById("role").style.display='block';
}

function passiveHint(){
    document.getElementById("passive").style.display='block';
}

function qHint(){
    document.getElementById("q").style.display='block';
}

function wHint(){
    document.getElementById("w").style.display='block';
}

function eHint(){
    document.getElementById("e").style.display='block';
}

function rHint(){
    document.getElementById("r").style.display='block';
}

function initBoard(){
    let board = document.getElementById("game-board");

    for (let index = 0; index < guessesRemaning; index++) {
        let row = document.createElement("div");
        row.className = "letter-row";
    
    }
}

function changeTitle(){
    document.getElementById("title").innerHTML = "LOL Champ Guessing Game";
}

randomChamp();


