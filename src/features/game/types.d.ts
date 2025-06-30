interface HexData {
  hex: string,
  characters: HexDigit[],
  status?: string
}

interface HexDigit {
    character?: string,
    color?: 'red' | 'green' | 'blue',
    status?: 'match' | 'high' | 'low'
}

export interface Color extends HexData {
    name: string
}

export interface GameState {
    answer: Color,
    currentGuess: HexData,
    guesses: HexData[],
    isGameOver: boolean,
    isCorrect: boolean,
    remainingGuesses: number,
}