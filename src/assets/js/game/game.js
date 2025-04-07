import Character from "../domain/domain";

class Game {
  start() {
    console.log(`[Class ${Game.name}]`, 'game started', new Character());
  }
}

class GameSavingData {
  #gameSavingData = '"game saving data"';

  get gameSavingData() {
    return this.#gameSavingData;
  }

  set gameSavingData(gameSavingData) {
    this.#gameSavingData = gameSavingData;
  }
}

function readGameSaving() {
  console.log(`[Function ${readGameSaving.name}]`, 'loaded game saving data', new GameSavingData().gameSavingData);
}

function writeGameSaving() {
  console.log(`[Function ${writeGameSaving.name}]`, 'saved game');
}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
