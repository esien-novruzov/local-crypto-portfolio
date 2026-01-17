import { HStack, Link } from "@chakra-ui/react"

export function Navbar() {
  const navLinks = [
    { name: "Portfolio", href: "#" },
    { name: "Markets", href: "#" },
    { name: "History", href: "#" },
  ]

  return (
    <HStack 
      gap="8" 
      px="8" 
      py="2" 
      borderBottom="1px solid" 
      borderColor="border.subtle"
      bg="bg.panel"
    >
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
  )
}