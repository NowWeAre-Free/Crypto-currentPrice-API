const burger = document.querySelector(".nav__options-burger");
const menu = document.querySelector(".nav__menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("nav__menu--active");
    burger.classList.toggle("nav__options-burger--active")
})

//price api

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Chex&vs_currencies=usd";
const btc = document.querySelector(".crypto__btc-price");
const eth = document.querySelector(".crypto__eth-price");
const hex = document.querySelector(".crypto__hex-price");

fetch(url)
  .then(response => response.json())
  .then(data => {

    const bitcoinPrice = data["bitcoin"]["usd"];
    const ethereumPrice = data["ethereum"]["usd"];
    const hexPrice = data["hex"]["usd"];
    btc.innerText = `$ ${bitcoinPrice}`;
    eth.innerText = `$ ${ethereumPrice}`;
    hex.innerText = `$ ${hexPrice}`;
  })
  .catch(error => alert(error));