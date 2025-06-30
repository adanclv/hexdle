import { useEffect, useRef } from "react"
import { Key } from "@/features/game/components/Key"
import { KEYS_ALLOWED } from "@/features/game/constants"

const keyboard: string[][] = [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['Enter', 'A', 'B', 'C', 'D', 'E', 'F', 'Del']
]

interface Props {
    updateGuess: (keyPressed: string) => void,
    isModalVisible: boolean,
}

export const Keyboard = ({ updateGuess, isModalVisible }: Props) => {
    const pressedKeys = useRef<Set<string>>(new Set())

    useEffect(() => {
        if (!isModalVisible) {
            window.addEventListener('keydown', handleKeyDown)
            window.addEventListener('keyup', handleKeyUp)
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [updateGuess])

    const onPress = (value: string) => {
        updateGuess(value.toUpperCase())
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        const keyPressed = event.key.toUpperCase()
        if (KEYS_ALLOWED.includes(keyPressed)) {
            if (pressedKeys.current.has(keyPressed)) return;

            pressedKeys.current.add(keyPressed)
            updateGuess(keyPressed)
        }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
        const keyPressed = event.key.toUpperCase()

        if (KEYS_ALLOWED.includes(keyPressed)) {
            pressedKeys.current.delete(keyPressed)
        }
    }

    return (
        <section 
            className="flex flex-col items-center justify-center gap-2"
        >
            {keyboard.map((keys, idx) => (
                <div 
                    key={idx} 
                    className="grid auto-cols-max grid-flow-col w-full justify-center gap-1.5 md:gap-2"
                >
                    {keys.map((keyName) => (
                        <Key key={keyName} keyName={keyName} special={['Enter', 'Del'].includes(keyName)} onPress={onPress} />
                    ))}
                </div>
            ))
            }
        </section>

    )
}
