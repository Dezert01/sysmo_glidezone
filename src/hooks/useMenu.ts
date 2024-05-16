import { useState } from "react";

type TMenu = "play" | "gameend" | "countdown" | "win" | "lose";

export default function useMenu() {
  const [showComponent, setShowComponent] = useState<TMenu>("play");

  return {
    showComponent,
    setShowComponent,
  };
}
