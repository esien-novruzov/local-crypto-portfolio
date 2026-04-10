import { HStack, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ranges = ["1D", "1W", "1M", "3M", "1Y", "ALL"]

export default function TimeRangeSelector() {
    const [selected, setSelected] = useState("1M");
    return (
    <HStack 
      // Background is slightly darker than the card it sits on
      bg="blackAlpha.200" 
      _dark={{ bg: "whiteAlpha.50" }}
      p="1" 
      gap="1" 
      borderRadius="xl" 
      display="inline-flex"

    >
      {ranges.map((range) => {
        const isActive = selected === range;
        return (
          <Button
            key={range}
            onClick={() => setSelected(range)}
            size="xs"
            variant="ghost"
            // Color logic
            color={isActive ? "fg.default" : "fg.muted"}
            // Active background logic
            bg={isActive ? "whiteAlpha.300" : "transparent"}
            _dark={{
              bg: isActive ? "whiteAlpha.300" : "transparent",
              _hover: { bg: isActive ? "whiteAlpha.200" : "whiteAlpha.100" }
            }}
            // Smooth transition for the "slide" feel
            transition="all 0.2s ease"
            px="4"
            height="24px"
            fontSize="10px"
            fontWeight={isActive ? "bold" : "medium"}
            borderRadius="lg"
            _active={{ transform: "scale(0.95)" }}
          >
            {range}
          </Button>
        );
      })}
    </HStack>
  );
}