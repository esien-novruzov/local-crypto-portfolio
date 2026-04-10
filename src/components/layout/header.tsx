"use client"

import { Flex, HStack, Link, Text, Box, Container } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
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
    const session = localStorage.getItem("user_session");
    setIsLoggedIn(!!session);
  }, []);

  return (
    <Box
      as="header"
      bg="app.bg.page"
      borderBottom="1px solid"
      borderColor="app.border"
      shadow="20px"
      transition="background-color 0.2s"
    >
      <Container maxW="container.xl" px="8" py="4">
        <Flex align="center" justify="space-between">
          {/* 1. Logo */}
          <HStack>
            <Text
              fontSize="xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="app.fg"
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
                  color="app.fg.muted"
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