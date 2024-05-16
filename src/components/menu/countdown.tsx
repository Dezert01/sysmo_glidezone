import { useEffect, useState } from "react";
import Bleep from "../../audio/bleep.mp3";

type Props = {
  onCountdownEnd: () => void;
};

const Countdown: React.FC<Props> = ({ onCountdownEnd }) => {
  const [count, setCount] = useState(5);

  const audio = new Audio(Bleep);

  useEffect(() => {
    if (count > 0) {
      audio.play();
      const timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      onCountdownEnd();
    }
  }, [count]);
  return (
    <div className="my-auto flex h-[111px] w-[111px] items-center justify-center rounded-full bg-primary text-white">
      <h1>{count}</h1>
    </div>
  );
};

export default Countdown;
