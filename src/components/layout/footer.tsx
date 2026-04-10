"use client"
import { Box, Container, Flex, Text } from "@chakra-ui/react";

export default function Footer() {
    return <Box as="footer" bg="app.bg.surface" color="app.fg" py={6} borderColor="app.border" mt="auto">
        <Container maxW="container.xl">
            <Flex justify="center">
                <Text fontSize="sm">Footer Content</Text>
            </Flex>
        </Container>
    </Box>
}