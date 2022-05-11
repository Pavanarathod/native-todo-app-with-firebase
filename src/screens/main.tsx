import * as React from "react";
import { Text, Box, Center, VStack, useColorModeValue } from "native-base";
import ThemeToggle from "../components/theme-toggle";
import AnimatedCheckbox from "react-native-checkbox-reanimated";

const MainScreen = () => {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <AnimatedCheckbox
            checked={checked}
            highlightColor="#4444ff"
            checkmarkColor="#ffffff"
            boxOutlineColor="#4444ff"
          />
        </Box>
        <Box p={10} bg={useColorModeValue("red.500", "yellow.500")}>
          <Text>Hello World</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
};

export default MainScreen;
