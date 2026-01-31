"use client"

import { Flex, Heading, Spacer, HStack, Link, Text, Button, Box, Container } from "@chakra-ui/react"
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode"
import { useState, useEffect } from "react";
import { LogoutButton } from "../features/logout-button";

const navLinks = [
  { name: "Portfolio", href: "#" },
  { name: "Markets", href: "#" },
  { name: "News", href: "#" },
  { name: "History", href: "#" },
  { name: "Notifications", href: "#" },
]

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // This only runs on the client
    const session = localStorage.getItem("user_session");
    setIsLoggedIn(!!session);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    window.location.href = "/login";
  };

  // 🎨 Define dynamic colors based on theme
  const bgColor = useColorModeValue("white", "#121418");
  const borderColor = useColorModeValue("gray.200", "#1A1D21");
  const textColor = useColorModeValue("gray.800", "white");
  const linkColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      as="header"
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
      shadow="20px"
      transition="background-color 0.2s" // Smooth transition during switch
    >
      <Container maxW="container.xl" px="8" py="4">
        <Flex align="center" justify="space-between">
          {/* 1. Logo */}
          <HStack>
            <Text
              fontSize="xl"
              fontWeight="bold"
              letterSpacing="tight"
              color={textColor}
            >
              CryptoX 🪙
            </Text>
            {/* 2. Navigation Links */}
            <HStack gap="8" pl={16}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  fontSize="sm"
                  fontWeight="medium"
                  color={linkColor}
                  _hover={{
                    color: "blue.500",
                    textDecoration: "none"
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>

          {/* 3. Actions */}
          <HStack gap="4">
            <ColorModeButton />
            {isLoggedIn && <LogoutButton />}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}