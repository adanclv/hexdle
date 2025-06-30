import type { HexDigit } from "@/features/game/types";
import { Tile } from "@/features/game/components/Tile";
import { useEffect, useState } from "react";
import { STATUSES } from '@/features/game/constants'

interface Props {
    tiles: HexDigit[],
    status?: string
}

export const TileRow = ({ tiles, status }: Props) => {
    const [isShaking, setIsShaking] = useState<boolean>(false)

    useEffect(() => {
        if (status === STATUSES.GUESS.ERROR) {
            setIsShaking(false);
            const restart = setTimeout(() => {
                setIsShaking(true);
            }, 10);

            const stop = setTimeout(() => {
                setIsShaking(false);
            }, 700);

            return () => {
                clearTimeout(restart);
                clearTimeout(stop);
            }
        }
    }, [status]);

    return (
        <div className={`grid grid-cols-6 gap-2 h-[55px] w-[350px] ${isShaking ? 'animate-shake' : ''}`}>
            {tiles.map((tile, index) =>
                <Tile key={index} hexDigit={tile} index={index} status={status} />
            )}
        </div>
    );
}
