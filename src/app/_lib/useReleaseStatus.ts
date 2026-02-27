"use client";

import { useEffect, useState } from "react";
import { SHOW_RELEASE_DATE } from "./constants";

export function useReleaseStatus() {
  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    const checkRelease = () => {
      const now = new Date();
      setIsReleased(now >= SHOW_RELEASE_DATE);
    };

    checkRelease(); // initial check

    const interval = setInterval(checkRelease, 1000);

    return () => clearInterval(interval);
  }, []);

  return isReleased;
}