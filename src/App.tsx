import { useEffect, useState } from "react";
import Onboarding from "./components/onboarding";
import SplashScreen from "./components/splashscreen";
import { AnimatePresence, motion as m } from "framer-motion";
import useOnboarding from "./hooks/useOnboarding";
import { OnboardingConfig } from "./config/onboarding.config";
import Menu from "./components/menu/menu";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const { currentStepData, next, isOnboardingVisible } =
    useOnboarding(OnboardingConfig);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-[400px] min-h-[400px] w-[850px] min-w-[850px] overflow-hidden rounded-xl border-4 border-black bg-white">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <m.div
            key="splashscreen"
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <SplashScreen />
          </m.div>
        ) : null}
        {!showSplash && isOnboardingVisible ? (
          <m.div
            key="onboarding"
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Onboarding data={currentStepData} next={next} />
          </m.div>
        ) : null}
        {!showSplash && !isOnboardingVisible ? (
          <m.div
            key="onboarding"
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Menu />
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
