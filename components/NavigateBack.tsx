import { useRouter } from "next/router";
const NavigateBack = () => {
    const router = useRouter();

    return <button onClick={() => router.back()}>Go back</button>;
};

export default NavigateBack;
