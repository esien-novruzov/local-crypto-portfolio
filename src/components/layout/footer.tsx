"use client"
import { Box, Container, Flex, Text, HStack, Link } from "@chakra-ui/react";
import { Info } from "lucide-react";

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
                <HStack align="flex-start" gap={3} mb={4}>
                    <Box color="app.fg.muted" flexShrink={0} mt="3px">
                        <Info size={14} />
                    </Box>
                    <Text fontSize="xs" color="app.fg.muted" lineHeight="1.7">
                        Cryptocurrency prices and data are for informational purposes only. This content is not financial advice and should not be construed as such. Investing in cryptocurrencies involves significant risk, including the possible loss of principal. Past performance is not indicative of future results. Always conduct your own research before making any investment decisions.
                    </Text>
                </HStack>
                <Box borderTop="1px solid" borderColor="app.border" pt={3}>
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
                </Box>
            </Container>
        </Box>
    )
}
