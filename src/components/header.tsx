"use client"

import { Flex, Heading, Spacer, HStack, Link, Text, Button } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import { useState, useEffect } from "react";
import { LogoutButton } from "./ui/logout-button";

const navLinks = [
    { name: "Portfolio", href: "#" },
    { name: "Markets", href: "#" },
    { name: "History", href: "#" },
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

    return (
        <Flex
            as="header"
            px="8"
            py="4"
            bg="bg.panel"
            borderBottom="1px solid"
            borderColor="border.subtle"
            align="center"
            justify="space-between"
        >
            {/* 1. Logo */}
            <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
                Vault.io 🪙
            </Text>

            {/* 2. Navigation Links (The "Middle" section) */}
            <HStack gap="8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        fontSize="sm"
                        fontWeight="medium"
                        color="fg.muted"
                        _hover={{ color: "blue.500", textDecoration: "none" }}
                        transition="color 0.2s"
                    >
                        {link.name}
                    </Link>
                ))}
            </HStack>

            <HStack gap="4">
                <ColorModeButton />
                {isLoggedIn && (<LogoutButton />)}
            </HStack>
        </Flex>
    )
}