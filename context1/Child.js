import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { MyContext } from "./MyContext";
import { Foo } from "./Foo";

export const Child = () => {
  const context = useContext(MyContext);
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          height: 300,
          borderRadius: 40,
        },
        { backgroundColor: context.theme === "light" ? "gray" : "#4b4b4b" },
      ]}
    >
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "blue" }}>
        {context.theme}
      </Text>
      <Button
        title="DEĞİŞTİR"
        onPress={() =>
          context.setTheme(context.theme === "dark" ? "light" : "dark")
        }
      />
      <Foo />
    </View>
  );
};
