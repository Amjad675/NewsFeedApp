import { StyleSheet } from "react-native";
import { theme } from "../../index";
const { padding, color, normalize } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  info: {
    marginRight: 10,
    flex: 1
  }
});

module.exports = styles;
