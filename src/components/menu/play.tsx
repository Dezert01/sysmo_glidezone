import { Button } from "../ui/button";
import AudioPlayer from "./audioPlayer";

type Props = {
  play: () => void;
};

const Play: React.FC<Props> = ({ play }) => {
  return (
    <>
      <AudioPlayer />
      <div className="relative">
        <h1 className="uppercase">Glide Zone</h1>
        <div className="absolute -right-8 bottom-0 text-base">by Sysmo.pl</div>
      </div>
      <Button className="my-auto" size="round" onClick={play}>
        <svg
          width="59"
          height="68"
          viewBox="0 0 59 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.5001 31.402C59.5001 32.5567 59.5001 35.4434 57.5001 36.5981L5.00006 66.909C3.00006 68.0637 0.500061 66.6204 0.500061 64.311L0.500061 3.68917C0.500061 1.37977 3.00006 -0.0636053 5.00006 1.09109L57.5001 31.402Z"
            fill="white"
          />
        </svg>
      </Button>
    </>
  );
};

export default Play;
