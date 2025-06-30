import type { GAME_STATUSES } from "@/constants";

export type GameStatus = typeof GAME_STATUSES[keyof typeof GAME_STATUSES]

export interface GuessHistogram {
  "1": number,
  "2": number,
  "3": number,
  "4": number,
  "5": number,
  "6": number,
}

export interface StoredGameState {
    boardState: string[],
    status: GameStatus | null,
    hardMode: boolean,
    darkMode: boolean,
    lastPlayed?: string, // Date
}

export interface GameStats {
  gamesPlayed: number,
  gamesWon: number,
  currentStreak: number,
  maxStreak: number,
  guesses: GuessHistogram,
  currentRow: number | null
}

export interface Rule { // Game Instructions
    id: number,
    text: string
}

export interface Example { // Game Instrucctions
    id: number,
    hex: string,
    characters: HexDigit[],
    character: string,
    description: string
}

export interface Message {
    type: string,
    text: string,
    code?: string
}