"use client"
import { Header } from "@/components/header";
import { Box, Heading } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <Box h="100vh" w="100vw" bg="gray.100">
         <Header />
      {/* Main app content here */}
    </Box>
  );
}