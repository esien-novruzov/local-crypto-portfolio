import { Flex, Box } from "@chakra-ui/react";
import Footer from "./footer";
import { Header } from "./header";
import StatusBar from "./status-bar";

export default function PageLayout({ children }) {
    return (
        <Flex
            direction="column"
            minH="100vh" // Full viewport height
            overflow="hidden"
            bg="app.bg.canvas"
        >
            <Header />
            <StatusBar />

            <Box
                as="main"
                flex="1"              // Grows to fill space
                display="flex"        // 🚀 NEW: Ensures children can fill space
                flexDirection="column" // 🚀 NEW: Keeps vertical flow
                w="full"
            >
                {children}
            </Box>

            <Footer />
        </Flex>
    );
}