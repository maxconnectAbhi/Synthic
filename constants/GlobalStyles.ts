import { StyleSheet } from "react-native";
import Colors from "./Colors";

const GlobalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.onPrimary,
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.onPrimary,
    padding: 16,
  },
  alCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  flexEnd: {
    alignItems: "flex-end",
  },
});

export default GlobalStyles;
