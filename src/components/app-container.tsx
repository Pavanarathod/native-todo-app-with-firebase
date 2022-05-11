import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

interface Props {
  children: React.ReactNode;
}

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      {props.children}
      {/* <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider> */}
    </NavigationContainer>
  );
}
