import { useFonts, Sora_400Regular, Sora_700Bold, Sora_100Thin, Sora_500Medium, Sora_600SemiBold } from "@expo-google-fonts/sora";

const useGlobalFonts = () => {
    const [fontsLoaded] = useFonts({
        Sora_400Regular,
        Sora_700Bold,
        Sora_100Thin,
        Sora_500Medium,
        Sora_600SemiBold
    });
    return fontsLoaded;
};

export default useGlobalFonts;
