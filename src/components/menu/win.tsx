import { useState } from "react";
import { Button } from "../ui/button";
import Fireworks from "../../animations/fireworks.json";
import Lottie from "lottie-react";
type Props = {
  leaveGame: () => void;
};

const Win: React.FC<Props> = ({ leaveGame }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const Prize = "#123456";

  const handleCopy = () => {
    navigator.clipboard.writeText(Prize);
    setCopied(true);
  };

  return (
    <div className="relative flex h-full  w-full flex-col items-center justify-around">
      <h1>Wygrana</h1>
      <Lottie className="z-1 absolute left-0" animationData={Fireworks} />
      <Lottie className="z-1 absolute right-0" animationData={Fireworks} />
      <div className="z-10 flex flex-col gap-5">
        <Button className="normal-case" onClick={handleCopy}>
          NAGRODA ({copied ? "copied ✅" : "copy to clipboard"})
        </Button>
        <Button variant="link" size="link" onClick={leaveGame}>
          opuść grę
        </Button>
      </div>
    </div>
  );
};

export default Win;
