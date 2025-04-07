import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./game/game";

console.log('APP IS RUNNING!');

const game = new Game();
game.start();

loadGame();
saveGame();
