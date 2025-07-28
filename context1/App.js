import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Child } from "./Child";
import { MyContext } from "./MyContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <View
        style={[
          styles.container,
          { backgroundColor: theme === "light" ? "white" : "#212121" },
        ]}
      >
        <StatusBar style="auto" />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{theme}</Text>
        <Child />
      </View>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
