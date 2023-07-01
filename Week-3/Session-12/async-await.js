"use strict";

async function getExchangeRate(currencyCode) {
  try {
    // fetching data through fetch api
    const response = await fetch("https://api.exchangerate.host/latest");
    const exchangeRates = await response.json();
    const ratesEntries = Object.entries(exchangeRates.rates);

    // looping through the entries to find the rate for the desired currency code
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
