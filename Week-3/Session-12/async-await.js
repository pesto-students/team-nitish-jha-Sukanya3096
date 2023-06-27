"use strict";

async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    const exchangeRates = await response.json();
    const ratesEntries = Object.entries(exchangeRates.rates);
    for (const [key, value] of ratesEntries) {
      if (key == currencyCode) {
        return +value.toFixed(4);
      }
    }
    return null;
  } catch (error) {
    throw "Something went wrong";
  }
}

getExchangeRate("INR").then(
  (rate) => {
    console.log(rate);
  },
  (error) => {
    console.log(error);
  }
);
