import { useState, useEffect } from "react";

export const useMediaQuery = (query = "(max-width: 768px)"): boolean => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const listener = () => {
            setMatches(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", listener);

        return () => mediaQuery.removeEventListener("change", listener);
    }, [query]);

    return matches;
};
