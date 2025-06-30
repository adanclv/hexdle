interface Props {
    label: string,
    value: number | string
}

export const StatCard = ({ label, value }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center text-primary-light dark:text-primary-dark">
            <h2 className="text-[28px] md:text-[30px]">{value}</h2>
            <p className="text-[12px] md:text-[14px]">{label}</p>
        </div>
    )
} 
