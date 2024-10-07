import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { HistoryManagerProvider, useHistoryManager } from "@/ui/History";
import RootLayout from "@/ui/RootLayout";
import { store } from "@/data/store/store";
import Theme from "@/ui/theme";
import FadeAnimation from "@/ui/atoms/FadeAnimation";

export default function App({ Component, pageProps, router }: AppProps) {
    const historyManager = useHistoryManager();

    return (
        <HistoryManagerProvider value={historyManager}>
            <Theme>
                <RootLayout>
                    <AnimatePresence mode="wait">
                        <FadeAnimation key={router.asPath}>
                            <Provider store={store}>
                                <Component {...pageProps} />
                            </Provider>
                        </FadeAnimation>
                    </AnimatePresence>
                </RootLayout>
            </Theme>
        </HistoryManagerProvider>
    );
}
