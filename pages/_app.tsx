import { HistoryManagerProvider, useHistoryManager } from "@/ui/History";
import RootLayout from "@/ui/RootLayout";
import { store } from "@/data/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Theme from "@/ui/theme";

export default function App({ Component, pageProps }: AppProps) {
    const historyManager = useHistoryManager();

    return (
        <HistoryManagerProvider value={historyManager}>
            <Theme>
                <RootLayout>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </RootLayout>
            </Theme>
        </HistoryManagerProvider>
    );
}
