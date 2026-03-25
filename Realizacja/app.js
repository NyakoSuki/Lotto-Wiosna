"use strict";

const elBtnSubmit = document.getElementById("btnSubmit");
const elBtnReset = document.getElementById("btnReset");
const elNumber = document.querySelectorAll(".number");
const elLeftToRoll = document.getElementById("leftToRoll");

let numbers = new Array();
let leftToRoll = 6;



/*--------------------------------------------
                    Logika
--------------------------------------------*/

// --- Losowanie 6 unikalnych liczb ---
function RNG(max, min)
{
    let rnd;
    do
    {
        rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    }while(numbers.includes(rnd))
    return rnd
}



/*----------------------------------------
                    DOM
----------------------------------------*/

// --- Wyświetla nowo wylosowane liczby ---
function displayNumbers()
{
    numbers.forEach((num, i) => 
    {
        elNumber[i].textContent = num;
        elNumber[i].classList.add("visible");
    });
}

// --- Czyści liczby z ekranu ---
function clearNumbers()
{
    for(let i = 0; i < 6; i++)
    {
        elNumber[i].classList.remove("visible");
    }
}


// --- Kontroluje możliwość dalszego losowania ---
function rollControl()
{
    if(leftToRoll <= 0)
    {
        elBtnSubmit.disabled = true;
    }
    else
    {
        elBtnSubmit.disabled = false;
    }
    displayInfo()
}

// --- Aktualizacja pozostałych losowań ---
function displayInfo()
{
    elLeftToRoll.textContent = leftToRoll;
}


// --- Wywołanie zadrzeń po nacisnięciu "Dodaj liczbę" ---
elBtnSubmit.addEventListener('click', ()=>
{
        leftToRoll--;
        numbers.push(RNG(49,1));
        displayNumbers();
        rollControl();
})

// --- Wywołanie zadrzeń po nacisnięciu "" ---
elBtnReset.addEventListener('click', ()=>
{
    leftToRoll = 6;
    numbers = [];
    clearNumbers();
    rollControl();
    
})