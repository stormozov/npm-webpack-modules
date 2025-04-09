import Character from '../domain/domain';

export default class Game {
  start() {
    console.log(`[Class ${Game.name}]`, 'game started', new Character());
  }
}

export class GameSavingData {
  #gameSavingData = '"game saving data"';

  get gameSavingData() {
    return this.#gameSavingData;
  }

  set gameSavingData(gameSavingData) {
    this.#gameSavingData = gameSavingData;
  }
}

export function readGameSaving() {
  console.log(
    `[Function ${readGameSaving.name}]`, 
    'loaded game saving data', 
    new GameSavingData().gameSavingData
  );
}

export function writeGameSaving() {
  console.log(`[Function ${writeGameSaving.name}]`, 'saved game');
}
