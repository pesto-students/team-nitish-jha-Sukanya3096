"use strict";

const game = {
  lives: 3,
  coins: 0,

  get points() {
    return this.coins * 10;
  },

  playerDies: function () {
    if (this.lives > 0) {
      this.lives -= 1;
    }
    console.log(`lives = ${this.lives}`);
    console.log(`coins = ${this.coins}`);
  },

  newGame: function () {
    this.lives = 3;
    this.coins = 0;
    console.log(`lives = ${this.lives}`);
    console.log(`coins = ${this.coins}`);
  },
};
