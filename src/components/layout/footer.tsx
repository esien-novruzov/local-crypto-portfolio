"use client"
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export default function Footer() {
    // 🎨 Define dynamic colors based on theme
    const bgColor = useColorModeValue("gray.100", "#1A1D21");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const textColor = useColorModeValue("gray.800", "white");
    const linkColor = useColorModeValue("gray.600", "gray.400");
    
    return <Box as="footer" bg={bgColor} color={textColor} py={6} borderColor={borderColor}>
        <Container maxW="container.xl">
            <Flex justify="center">
                <Text fontSize="sm">Footer Content</Text>
            </Flex>
        </Container>
    </Box>
}