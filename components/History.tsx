import { useRouter } from "next/router";
import {
    useContext,
    createContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

type HistoryManager = ReturnType<typeof useHistoryManager> | null;

const historyManagerContext = createContext<HistoryManager>(null);

type ProviderProps = {
    value: HistoryManager;
    children: ReactNode;
};

export function HistoryManagerProvider({ value, children }: ProviderProps) {
    return (
        <historyManagerContext.Provider value={value}>
            {children}
        </historyManagerContext.Provider>
    );
}

export const useHistory = () => useContext(historyManagerContext);

export function useHistoryManager() {
    const router = useRouter();
    const [history, setHistory] = useState<string[]>([]);
    console.log(history);

    useEffect(() => {
        // set initial history route
        setHistory([router.asPath]);

        const handleRouteChange = (
            url: string,
            { shallow }: { shallow: boolean }
        ) => {
            if (!shallow) {
                setHistory((prevState) => [...prevState, url]);
            }
        };

        router.beforePopState(() => {
            setHistory((prevState) => prevState.slice(0, -2));
            return true;
        });

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

    return { history, canGoBack: () => history.length > 1 };
}
