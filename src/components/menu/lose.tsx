import { Button } from "../ui/button";

type Props = {
  playAgain: () => void;
};

const Lose: React.FC<Props> = ({ playAgain }) => {
  return (
    <div className="flex h-full flex-col items-center justify-around">
      <h1>Przegrana</h1>
      <Button onClick={playAgain}>Zagraj Ponownie</Button>
    </div>
  );
};

export default Lose;
