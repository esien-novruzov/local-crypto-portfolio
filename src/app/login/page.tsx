"use client";
import LoginMask from "@/components/login-mask";
import MatrixRain from "@/components/matrix-rain";
import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";

export default function LoginPage() {
    const [isSuccess, setIsSuccess] = useState(false)

    return (
        <Box position="relative" h="100vh" w="100vw" overflow="hidden">
            <MatrixRain />
            <Center position="relative" zIndex={1} h="full">
                <LoginMask onAuthSuccess={() => setIsSuccess(true)} />
            </Center>
        </Box>
    );
}