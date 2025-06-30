import { createContext } from "react"
import { defaultGameState, defaultGameStats } from "@/constants"
import type { GameStatus, Message, StoredGameState, GameStats } from "@/types"
import type { HexData } from "@/features/game/types"

interface GameContextProps {
    gameContext: StoredGameState,
    gameStats: GameStats,
    message: Message | null,
    toggleTheme: () => void,
    toggleDifficult: () => void,
    updateMessage: (msg: Message | null) => void,
    updateGameContext: (currentGuesses: HexData[], status: GameStatus) => void,
    updateGameStats: (newStats: GameStats) => void
}

export const GameContext = createContext<GameContextProps>({
    gameContext: defaultGameState,
    gameStats: defaultGameStats,
    message: null,
    toggleTheme: () => { },
    toggleDifficult: () => { },
    updateMessage: () => { },
    updateGameContext: () => { },
    updateGameStats: () => { }
})

export type { GameContextProps }