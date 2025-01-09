import StackNavigator from "@/components/navigation/StackNavigator";
import Colors from "@/constants/Colors";
import GlobalStyles from "@/constants/GlobalStyles";
import { SafeAreaView } from "react-native";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

export default function App() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: Colors,
  };
  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <PaperProvider theme={{ ...theme }}>
        <StackNavigator />
      </PaperProvider>
    </SafeAreaView>
  );
}
