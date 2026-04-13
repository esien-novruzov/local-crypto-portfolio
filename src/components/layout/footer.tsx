"use client"
import { Box, Container, Flex, Text, HStack, Link } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            bg="app.bg.canvas"
            borderTop="1px solid"
            borderColor="app.border"
            py={4}
            mt="auto"
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Text fontSize="xs" color="app.fg.muted">
                        © 2026 CryptoX. All rights reserved.
                    </Text>
                    <HStack gap={6}>
                        <Link href="#" fontSize="xs" color="app.fg.muted" _hover={{ color: "app.fg", textDecoration: "none" }}>Privacy</Link>
                        <Link href="#" fontSize="xs" color="app.fg.muted" _hover={{ color: "app.fg", textDecoration: "none" }}>Terms</Link>
                        <Link href="#" fontSize="xs" color="app.fg.muted" _hover={{ color: "app.fg", textDecoration: "none" }}>Support</Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}
