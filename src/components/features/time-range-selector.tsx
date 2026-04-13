"use client";
import { HStack, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

const ranges = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

export default function TimeRangeSelector() {
  const [selected, setSelected] = useState("1M");

  return (
    <HStack gap="6">
      {ranges.map((range) => {
        const isActive = selected === range;
        return (
          <Box
            key={range}
            as="button"
            onClick={() => setSelected(range)}
            position="relative"
            pb="1"
            cursor="pointer"
            border="none"
            bg="transparent"
            outline="none"
            _focus={{ outline: "none" }}
          >
            <Text
              fontSize="xs"
              fontWeight={isActive ? "semibold" : "medium"}
              color={isActive ? "app.fg" : "app.fg.muted"}
              transition="color 0.15s"
              _hover={{ color: "app.fg" }}
              userSelect="none"
            >
              {range}
            </Text>
            {isActive && (
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                h="2px"
                bg="green.500"
                borderRadius="full"
              />
            )}
          </Box>
        );
      })}
    </HStack>
  );
}
