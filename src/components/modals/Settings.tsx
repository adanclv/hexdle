import { useContext } from "react"
import { GameContext } from "@/context/GameObjectContext"
import { MSG_TYPE, MSG_CODE } from '@/features/game/constants'

export const Settings = () => {
    const { gameContext, toggleTheme, toggleDifficult } = useContext(GameContext)

    return (
        <section className="w-full sm:w-[350px] h-fit text-primary-light dark:text-primary-dark">
            <header className="">
                <h2 className="text-[18px] md:text-[20px] font-bold mb-2">Settings</h2>
            </header>

            <div className="grid grid-flow-row auto-rows-max divide-y-2 divide-gray-200">
                <Setting
                    title="Hard Mode"
                    description="Each guess is evaluated in pairs of hexadecimal digits."
                    isGameStarted={!!gameContext?.status}
                    flag={gameContext.hardMode}
                    toggleFunc={toggleDifficult}
                />
                <Setting
                    title="Dark Mode"
                    flag={gameContext.darkMode}
                    toggleFunc={toggleTheme}
                />
                {/* <Setting
                    title="High Contrast Mode"
                    description="Lorem ipsum dolor."
                    flag={false}
                    toggleFunc={() => { }}
                /> */}
            </div>
        </section>
    )
}

interface SettingProps {
    title: string,
    description?: string,
    isGameStarted?: boolean,
    flag: boolean,
    toggleFunc: () => void
}

const Setting = ({ title, description, isGameStarted, flag, toggleFunc }: SettingProps) => {
    return (
        <article className="flex flex-row justify-between items-center gap-8 md:gap-4 p-2 md:p-4">
            <section className="items-center">
                <h3 className="text-[16px] font-bold">{title}</h3>
                <p className="text-[12px]">{description ?? ''}</p>
            </section>
            <ToggleSwitch isGameStarted={isGameStarted} flag={flag} toggleFunc={toggleFunc} />
        </article>
    )
}

interface SwitchProps {
    isGameStarted?: boolean,
    flag: boolean,
    toggleFunc: () => void
}

const ToggleSwitch = ({ isGameStarted, flag, toggleFunc }: SwitchProps) => {
    const { updateMessage } = useContext(GameContext)
    const bgColor = !flag && isGameStarted // Hard mode condition
        ? 'bg-gray-300 dark:bg-gray-600'
        : flag
            ? 'bg-green-400'
            : 'bg-gray-400 dark:bg-gray-500'

    const bgColorToggle = !flag && isGameStarted ? 'bg-white/50' : 'bg-white' // Hard mode condition

    return (
        <div
            className={`w-10 h-6 flex shrink-0 items-center rounded-full p-1 duration-300 ease-in-out cursor-pointer ${bgColor}`}
            onClick={() => {
                if (!flag && isGameStarted) { // Hard mode condition
                    updateMessage({
                        type: MSG_TYPE.INFO,
                        text: 'Hard mode can only enabled at the start of a round',
                        code: MSG_CODE.HARD_MODE
                    })
                    return
                }
                toggleFunc()
            }}
        >
            <div className={`${bgColorToggle} size-4 rounded-full shadow-md transform duration-300 ease-in-out cursor-pointer ${flag ? 'translate-x-4' : ''}`} />
        </div>
    )
}
