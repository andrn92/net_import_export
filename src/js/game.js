import character from './domain.js'

class Game {
  start() {
    console.log('game started')
  }
}

export class GameSavingData {

}

export function readGameSaving() {

}

export function writeGameSaving() {}

const newGame = new Game()

export default newGame