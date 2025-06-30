import { getGameInfo } from '@/lib/getGameInfo'

interface Props {
    onClickPlay?: () => void,
    hasGameEnded: boolean
}

export const SplashPage = ({ onClickPlay, hasGameEnded }: Props) => {
    const { gameNumber, todayToString } = getGameInfo()
    const subtitle = hasGameEnded
        ? 'Great job on today’s puzzle! Check out your progress.'
        : 'Get 6 chances to guess a hex color.'
    const textButton = hasGameEnded
        ? 'See Stats'
        : 'Play'

    return (
        <div className="flex flex-col items-center justify-center h-screen mx-auto md:mx-40 text-primary-light dark:text-primary-dark">
            <h1 className="shine-title delay-500 text-[70px] md:text-[90px] ">
                Hexdle
            </h1>
            <h2 className="text-4xl/10 md:text-5xl/15 text-center mx-10">
                {subtitle}
            </h2>

            <div className="flex flex-col items-center justify-evenly md:flex-row gap-4 my-10 w-full xl:w-1/2">
                {/* <button className="btn btn-splash-page border-[1.6px] border-solid border-light-400 dark:border-dark-400">
                    Log in
                </button> */}
                <button
                    className="btn btn-splash-page bg-light-300 dark:bg-dark-300"
                    onClick={onClickPlay}
                >
                    {textButton}
                </button>
            </div>
            <p className="font-bold text-md md:text-lg">
                {todayToString}
            </p>
            <p className="text-md md:text-lg">
                {`No. ${gameNumber}`}
            </p>
        </div>
    );
}
