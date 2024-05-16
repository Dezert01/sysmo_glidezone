import { Button } from "../ui/button";

type Props = {
  chooseWin: () => void;
  chooseLose: () => void;
};

const GameEnd: React.FC<Props> = ({ chooseLose, chooseWin }) => {
  return (
    <div className="flex h-full flex-col items-center justify-around">
      <h1>Koniec gry</h1>
      <div className="flex items-center gap-20">
        <Button onClick={chooseWin}>Wygrana</Button>
        <Button onClick={chooseLose}>Przegrana</Button>
      </div>
    </div>
  );
};

export default GameEnd;
