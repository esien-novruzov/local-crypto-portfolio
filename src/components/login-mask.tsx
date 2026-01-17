"use client"
import { useState, useEffect } from "react"
import { VStack, Text, Spinner, Center, Box, PinInput } from "@chakra-ui/react"

export default function LoginMask() {
    const [isMounted, setIsMounted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formKey, setFormKey] = useState(0)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const shakeAnimation = `
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-8px); }
    100% { transform: translateX(0); }
  }
`;

    const handleComplete = (e: { value: string[] }) => {
        const pin = e.value.join("");

        if (pin === "1234") {
            localStorage.setItem("user_session", "authenticated")
            window.location.href = "/dashboard";
        } else {
            // 1. Immediately start the shake 🫨
            setIsError(true);

            // 2. Schedule the cleanup for AFTER the animation duration (e.g. 400ms)
            setTimeout(() => {
                setIsError(false);
                // 3. Only now do we clear the inputs and reset focus
                setFormKey(prev => prev + 1);
            }, 700);
        }
    };

    if (!isMounted) return null

    return (
        <Center h="100vh" w="100vw">
            <VStack
                p="12"
                // 🌑 Transparent dark background for better blur visibility
                bg="rgba(0, 0, 0, 0.2)"
                backdropFilter="blur(10px)"
                borderRadius="none"
                border="0px solid"
                borderColor={isError ? "red.500" : "whiteAlpha.200"}
                gap="10"
            >
                <VStack gap="2">
                    <Text color="white" fontWeight="" fontSize="md" letterSpacing="0.3em">
                        SECURED ACCESS
                    </Text>
                </VStack>

                <PinInput.Root
                    key={formKey} // Resets entire input group on error
                    onValueComplete={handleComplete}
                    autoFocus
                    mask
                    animation={isError ? "shake 0.4s ease-in-out" : "none"}
                    css={{
                        "&": {
                            // Injecting the keyframes into the component's scope
                            "@layer base": {
                                [shakeAnimation]: "",
                            },
                        },
                    }}
                >
                    <PinInput.Control
                        gap="4"
                    >
                        {[0, 1, 2, 3].map((i) => (
                            <PinInput.Input
                                key={i}
                                index={i}
                                fontSize="md"
                                color="green.400"
                                bg="blackAlpha.400"
                                border="1px solid"
                                borderColor="whiteAlpha.300"
                                _focus={{
                                    borderColor: "green.400",
                                    // 🟢 The signature Neon Glow
                                    boxShadow: "0 0 20px rgba(0, 255, 0, 0.4)",
                                    outline: "none"
                                }}
                            />
                        ))}
                    </PinInput.Control>
                </PinInput.Root>
                 <VStack>
                    <Text color="whiteAlpha.500" fontSize="sm">
                       You have 5 attempts remaining.
                    </Text>
                </VStack>

                <Box h="18px">
                    {isError && (
                        <Text color="red.500" fontWeight="" letterSpacing="" fontSize="14px">
                            Access denied
                        </Text>
                    )}
                </Box>
            </VStack>
        </Center>
    )
}