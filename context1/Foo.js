import { Text, View } from "react-native";
import { MyContext } from "./MyContext";
import { useContext } from "react";

export const Foo = () => {
  const data = useContext(MyContext);
  return (
    <View
      style={[
        {
          width: 150,
          height: 150,

          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        },
        {
          backgroundColor: data.theme === "light" ? "white" : "purple",
          borderRadius: 50,
        },
      ]}
    >
      <Text
        style={{
          fontSize: data.theme === "light" ? 40 : 14,
          color: data.theme === "light" ? "orange" : "white",
          fontWeight: data.theme === "light" ? "bold" : "condensedBold",
        }}
      >
        {data.theme}
      </Text>
    </View>
  );
};
