"use strict"


// window.onload = () => {
//     const getQuote = async () => {
//         const responce = await fetch("api.adviceslip.com/");
//         const quote = await responce.json();
//         return quote;
//     };

//     const setQuote = async () => {
//         document.getElementById("quote-text").innerHTML = "Loading...";
//         getQuote()
//             .then((responce) => {
//                 const {
//                     slip: { id, advice }
//                 } = responce;
//                 document.getElementById("quote-title").innerHTML = `Quote #$(id)`;
//                 document.getElementById("quote-text").innerHTML = `"$(advice)"`;
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     document.getElementById("btn-more").addEventListener("click", setQuote);
// }

const btnmore = document.querySelector(".btn");
const quoteNumber = document.querySelector(".title");
const quoteText = document.querySelector(".text");
const apiUrl = "https://api.adviceslip.com/advice";

btnmore.addEventListener('click', function () {

    //Request Data
    fetch(apiUrl, { cache: "no-cache" })
        .then((response) => response.json())
        .then((response) => {
            let data = response.slip;
            let dataId = data.id;
            let dataQuote = data.advice;

            //inject to dom
            quoteNumber.textContent = `ADVICE:-${dataId}`;
            quoteText.textContent = dataQuote;
        })
})