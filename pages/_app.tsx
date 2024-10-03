import RootLayout from "@/components/RootLayout";
import { store } from "@/data/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </RootLayout>
    );
}
