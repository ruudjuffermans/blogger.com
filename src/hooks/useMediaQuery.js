import { useState, useEffect } from "react";

const useMediaQuery = (mediaQuery) => {
  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleMediaQueryChange = (event) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, [mediaQuery]);

  return matches;
};

export default useMediaQuery;
