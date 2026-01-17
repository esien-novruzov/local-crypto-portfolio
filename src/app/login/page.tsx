"use client";
import LoginMask from "@/components/login-mask";
import MatrixRain from "@/components/matrix-rain";
import { Box, Center } from "@chakra-ui/react";

export default function LoginPage() {
    
  return (
    <Box position="relative" h="100vh" w="100vw" overflow="hidden">
      <MatrixRain /> {/* Only exists on this route */}
      <Center position="relative" zIndex={1} h="full">
        <LoginMask />
      </Center>
    </Box>
  );
}