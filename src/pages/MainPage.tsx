import { useContext, useState } from "react";
import { SplashPage } from "@/pages/SplashPage"
import { Game } from "@/pages/GamePage";
import { GameContext } from "@/context/GameObjectContext"
import { GAME_STATUSES } from "@/constants";
// import { LandscapeWarning } from "@/pages/LandscapeWarning";

export const MainPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { gameContext } = useContext(GameContext)
  const { status, boardState } = gameContext
  const hasGameEnded = status
    ? status !== GAME_STATUSES.IN_PROGRESS
    : false
  

  const handleClick = () => {
    const newState = !isActive;
    setIsActive(newState);
  }

  return (
    <>
      {isActive
        ? <Game hasGameEnded={hasGameEnded} />
        : <SplashPage onClickPlay={handleClick} status={status} guesses={boardState} />
      }
    </>
  )
}
