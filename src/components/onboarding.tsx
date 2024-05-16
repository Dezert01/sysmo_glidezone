import { Button } from "@/components/ui/button";
import { TOnboarding } from "@/model/onboarding";

type Props = {
  data: TOnboarding;
  next: () => void;
};

const Onboarding: React.FC<Props> = ({ data, next }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between py-8">
      <h1>{data.header}</h1>
      <div className="max-w-[450px] text-center text-base font-extrabold">
        {data.description}
      </div>
      <Button className="min-w-[180px]" onClick={next}>
        {data.buttonLabel || "Dalej"}
      </Button>
    </div>
  );
};

export default Onboarding;
