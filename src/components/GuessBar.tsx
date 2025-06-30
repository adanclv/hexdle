interface GuessBarProps {
    attempt: string,
    value: number,
    maxValue: number,
    currentRow?: number | null
}

interface BarProps {
    value: number,
    maxValue: number,
    isCurrent?: boolean
}

export const GuessBar = ({ attempt, value, maxValue, currentRow }: GuessBarProps) => {
    const isCurrent = attempt === currentRow?.toString()

    return (
        <div className="flex flex-row items-center gap-2 w-full">
            <p className="text-right text-[10px] md:text-[12px]">{attempt}</p>
            <Bar value={value} maxValue={maxValue} isCurrent={isCurrent} />
        </div>
    )
}

const Bar = ({ value, maxValue, isCurrent }: BarProps) => {
    const barColor = isCurrent ? 'bg-lime-green' : 'bg-light-400 dark:bg-dark-400'
    const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0
    const displayValue = percentage > 0 ? value : 0
    const displayWidth = displayValue > 0 ? `${Math.max(percentage, 8)}%` : 'fit-content'

    return (
        <div className='w-full items-center h-fit rounded-xs'>
            <div
                className={`${barColor} h-fit rounded-xs text-right`}
                style={{ width: displayWidth }}
            >
                <p className="text-[10px] md:text-[12px] px-1 font-bold text-white">{displayValue}</p>
            </div>
        </div>
    )
}
