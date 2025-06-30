import { GuessBar } from "@/components/GuessBar"
import type { GuessHistogram } from "@/types"

interface Props {
    guesses: GuessHistogram,
    currentRow: number | null
}

export const GuessDistribution = ({ guesses, currentRow }: Props) => {
    const maxGuessValue = Math.max(...Object.values(guesses));

    return (
        <article className="text-primary-light dark:text-primary-dark px-2 md:px-6">
            <h2 className="text-[16px] md:text-[18px]">Guess distribution</h2>
            <section className="flex flex-col gap-2 mt-2 mr-4 md:mr-6">
                {Object.entries(guesses).map(([guessCount, value]) =>
                    <GuessBar key={guessCount} attempt={guessCount} value={value} maxValue={maxGuessValue} currentRow={currentRow} />
                )}
            </section>
        </article>
    )
}
