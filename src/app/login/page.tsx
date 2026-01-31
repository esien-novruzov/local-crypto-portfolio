"use client";
import LoginMask from "@/components/features/login-mask";
import MatrixRain from "@/components/features/matrix-rain";
import { Box, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function LoginPage() {
    const [isSuccess, setIsSuccess] = useState(false)
      const [isMounted, setIsMounted] = useState(false)
    
      useEffect(() => {
        setIsMounted(true)
      }, [])
    
      if (!isMounted) return null

    return (
        <Box position="relative" h="100vh" w="100vw" overflow="hidden">
            <MatrixRain />
            <Center position="relative" zIndex={1} h="full">
                <LoginMask onAuthSuccess={() => setIsSuccess(true)} />
            </Center>
        </Box>
    );
}