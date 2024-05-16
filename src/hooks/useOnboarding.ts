import { TOnboarding } from "@/model/onboarding";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function useOnboarding(steps: TOnboarding[]) {
  const cookies = new Cookies(null, { path: "/" });

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(
    cookies.get("glidezone-show-onboarding") ? true : false,
  );

  function next() {
    setCurrentStepIndex((prev) => {
      if (prev === steps.length - 1) {
        setIsOnboardingComplete(true);
        cookies.set("glidezone-show-onboarding", 1);
        return prev;
      }
      return prev + 1;
    });
  }

  return {
    currentStepIndex,
    currentStepData: steps[currentStepIndex],
    next,
    isOnboardingVisible: !isOnboardingComplete,
  };
}
