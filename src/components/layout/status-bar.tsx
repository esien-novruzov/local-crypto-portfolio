"use client"
import { Box, Container, HStack, Flex, Circle, Text } from "@chakra-ui/react";

export default function StatusBar() {
    return <Box bg="app.bg.surface" py={2}>
        <Container maxW="container.xl">
            <HStack>
                <Flex align="center">
                    <Circle size="8px" bg="green.400" mr={2} />
                    <Text fontSize="xs" color="gray.600" fontWeight="medium">
                        System Online
                    </Text>
                </Flex>
                <Text fontSize="xs" color="gray.300">|</Text>
                <Text fontSize="xs" color="gray.500">
                    Last update: Just now
                </Text>
            </HStack>
        </Container>
    </Box>
}