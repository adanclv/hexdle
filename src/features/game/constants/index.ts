import type { HexData } from "@/features/game/types";

export const colorClasses = {
    red: {
        match: 'red-match',
        high: 'red-high',
        low: 'red-low'
    },
    green: {
        match: 'green-match',
        high: 'green-high',
        low: 'green-low'
    },
    blue: {
        match: 'blue-match',
        high: 'blue-high',
        low: 'blue-low'
    }
}

export const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
export const RGB_COLORS = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue'
}

export const KEYS_ALLOWED = [...DIGITS, 'ENTER', 'BACKSPACE']

export const STATUSES = {
    CHARS: {
        MATCH: 'match',
        HIGH: 'high',
        LOW: 'low'
    },
    GUESS: {
        ERROR: 'error',
        NORMAL: 'normal',
        CORRECT: 'correct'
    }
}

export const MSG_TYPE = {
    ERROR: 'error',
    INFO: 'info',
    SUCCESS: 'success'
}

export const MSG_CODE = {
    NOT_ENOUGH_DIGITS: 'not-enough-digits',
    GAME_OVER: 'game-over',
    WIN: 'win',
    INVALID_INPUT: 'invalid-input',
    HARD_MODE: 'hard-mode'
}

export const initialGuess: HexData = {
    hex: '', characters: [
        { character: '', color: 'red' },
        { character: '', color: 'red' },
        { character: '', color: 'green' },
        { character: '', color: 'green' },
        { character: '', color: 'blue' },
        { character: '', color: 'blue' }
    ]
}
export const initialGuessEmpty: HexData = {
    hex: '', characters: [
        { character: '' },
        { character: '' },
        { character: '' },
        { character: '' },
        { character: '' },
        { character: '' }
    ]
}

export const MAX_GUESSES = 6
export const MAX_DIGITS = 6
export const defaultTileDelay = 280