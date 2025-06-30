interface Props {
    keyName: string,
    special?: boolean,
    onPress: (value: string) => void
}

export const Key = ({ keyName, special, onPress }: Props) => {
    return (
        <button
            className={`flex items-center justify-center h-12 md:h-[56px] key-btn ${special ? "w-fit px-[10px] md:w-[80px]" : "px-[10px] w-fit md:w-[40px]"}`}
            onClick={(e) => {
                onPress(keyName)
                e.currentTarget.blur()
            }}
            type="button"
        >
            <p className="text-[22px] md:text-[24px] text-white">{keyName}</p>
        </button>
    )
}
