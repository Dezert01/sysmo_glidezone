import useMenu from "@/hooks/useMenu";
import Countdown from "./countdown";
import Play from "./play";
import GameEnd from "./gameEnd";
import Win from "./win";
import Lose from "./lose";

const Menu: React.FC = () => {
  const { showComponent, setShowComponent } = useMenu();

  return (
    <div className="relative flex h-full w-full flex-col items-center py-8 ">
      {showComponent === "play" ? (
        <Play play={() => setShowComponent("countdown")} />
      ) : null}
      {showComponent === "countdown" ? (
        <Countdown onCountdownEnd={() => setShowComponent("gameend")} />
      ) : null}
      {showComponent === "gameend" ? (
        <GameEnd
          chooseLose={() => setShowComponent("lose")}
          chooseWin={() => setShowComponent("win")}
        />
      ) : null}
      {showComponent === "win" ? (
        <Win leaveGame={() => setShowComponent("play")} />
      ) : null}
      {showComponent === "lose" ? (
        <Lose playAgain={() => setShowComponent("countdown")} />
      ) : null}
    </div>
  );
};

export default Menu;
