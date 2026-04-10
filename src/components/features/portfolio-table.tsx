import { Table, Input, Button, HStack, Text, Box, Badge, NumberInput } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function PortfolioTable() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null
    return (
        <Box
            borderRadius="xl"
            overflow="hidden"
            shadow="sm"
            bg="app.bg.page"
            borderColor="#2D333D"
        >
            <Table.Root
                variant="line"
                size="lg"
                tableLayout="fixed"
                css={{
                    "& tbody tr:last-child": { borderBottomWidth: "0px" },
                    "& tbody tr:last-child td": { borderBottomWidth: "0px" }
                }}
                width="full"
                m={8}
            ><Table.Header
                borderBottom="1px solid"
                borderColor="#2D333D"
            >
                    <Table.Row>
                        <Table.ColumnHeader color="fg.muted" fontWeight="medium" textAlign="left">Asset</Table.ColumnHeader>
                        <Table.ColumnHeader color="fg.muted" fontWeight="medium" textAlign="end">Price</Table.ColumnHeader>
                        <Table.ColumnHeader color="fg.muted" fontWeight="medium" textAlign="end">Change</Table.ColumnHeader>
                        <Table.ColumnHeader color="fg.muted" fontWeight="medium" textAlign="end">Holdings</Table.ColumnHeader>
                        <Table.ColumnHeader color="fg.muted" fontWeight="medium" textAlign="center">Action</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* 📋 Example: Bitcoin Rows*/}
                    <Table.Row _hover={{ bg: "app.hover.bg" }} transition="background 0.2s" bg="transparent">
                        <Table.Cell>
                            <HStack gap="3">
                                <Box boxSize="24px" bg="gray.200" rounded="full" display="flex" alignItems="center" justifyContent="center">
                                    <Text fontSize="xs" fontWeight="bold">B</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="semibold" fontSize="sm">Bitcoin</Text>
                                    <Text fontSize="10px" color="gray.500" textTransform="uppercase">BTC</Text>
                                </Box>
                            </HStack>
                        </Table.Cell>
                        <Table.Cell textAlign="end" fontFamily="mono" fontSize="sm">$98,421.20</Table.Cell>
                        <Table.Cell textAlign="end">
                            <Badge variant="plain" color="green.600" fontSize="xs">+1.2%</Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <Text fontSize="sm" fontWeight="medium">0.45 BTC</Text>
                            <Text fontSize="xs" color="gray.400">$44,289.54</Text>
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button variant="ghost" size="xs" color="gray.400" _hover={{ color: "red.500" }}>
                                Remove
                            </Button>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row _hover={{ bg: "app.hover.bg" }} transition="background 0.2s" bg="transparent">
                        <Table.Cell>
                            <HStack gap="3">
                                <Box boxSize="24px" bg="gray.200" rounded="full" display="flex" alignItems="center" justifyContent="center">
                                    <Text fontSize="xs" fontWeight="bold">B</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="semibold" fontSize="sm">Bitcoin</Text>
                                    <Text fontSize="10px" color="gray.500" textTransform="uppercase">BTC</Text>
                                </Box>
                            </HStack>
                        </Table.Cell>
                        <Table.Cell textAlign="end" fontFamily="mono" fontSize="sm">$98,421.20</Table.Cell>
                        <Table.Cell textAlign="end">
                            <Badge variant="plain" color="green.600" fontSize="xs">+1.2%</Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <Text fontSize="sm" fontWeight="medium">0.45 BTC</Text>
                            <Text fontSize="xs" color="gray.400">$44,289.54</Text>
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button variant="ghost" size="xs" color="gray.400" _hover={{ color: "red.500" }}>
                                Remove
                            </Button>
                        </Table.Cell>
                    </Table.Row>


                    <Table.Row _hover={{
                        // ☀️ Light Mode: A soft, solid grey
                        bg: "gray.50",

                        // 🌙 Dark Mode: A subtle, transparent white overlay
                        _dark: {
                            bg: "gray.900", // or "gray.800" if you want a solid color
                        }
                    }} transition="background 0.2s"
                        bg="transparent"
                    >
                        <Table.Cell>
                            <HStack gap="3">
                                <Box boxSize="24px" bg="gray.200" rounded="full" display="flex" alignItems="center" justifyContent="center">
                                    <Text fontSize="xs" fontWeight="bold">B</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="semibold" fontSize="sm">Bitcoin</Text>
                                    <Text fontSize="10px" color="gray.500" textTransform="uppercase">BTC</Text>
                                </Box>
                            </HStack>
                        </Table.Cell>
                        <Table.Cell textAlign="end" fontFamily="mono" fontSize="sm">$98,421.20</Table.Cell>
                        <Table.Cell textAlign="end">
                            <Badge variant="plain" color="green.600" fontSize="xs">+1.2%</Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <Text fontSize="sm" fontWeight="medium">0.45 BTC</Text>
                            <Text fontSize="xs" color="gray.400">$44,289.54</Text>
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button variant="ghost" size="xs" color="gray.400" _hover={{ color: "red.500" }}>
                                Remove
                            </Button>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row _hover={{
                        // ☀️ Light Mode: A soft, solid grey
                        bg: "gray.50",

                        // 🌙 Dark Mode: A subtle, transparent white overlay
                        _dark: {
                            bg: "gray.900", // or "gray.800" if you want a solid color
                        }
                    }} transition="background 0.2s"
                        bg="transparent"
                    >
                        <Table.Cell>
                            <HStack gap="3">
                                <Box boxSize="24px" bg="gray.200" rounded="full" display="flex" alignItems="center" justifyContent="center">
                                    <Text fontSize="xs" fontWeight="bold">B</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="semibold" fontSize="sm">Bitcoin</Text>
                                    <Text fontSize="10px" color="gray.500" textTransform="uppercase">BTC</Text>
                                </Box>
                            </HStack>
                        </Table.Cell>
                        <Table.Cell textAlign="end" fontFamily="mono" fontSize="sm">$98,421.20</Table.Cell>
                        <Table.Cell textAlign="end">
                            <Badge variant="plain" color="green.600" fontSize="xs">+1.2%</Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <Text fontSize="sm" fontWeight="medium">0.45 BTC</Text>
                            <Text fontSize="xs" color="gray.400">$44,289.54</Text>
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button variant="ghost" size="xs" color="gray.400" _hover={{ color: "red.500" }}>
                                Remove
                            </Button>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row _hover={{
                        // ☀️ Light Mode: A soft, solid grey
                        bg: "gray.50",

                        // 🌙 Dark Mode: A subtle, transparent white overlay
                        _dark: {
                            bg: "gray.900", // or "gray.800" if you want a solid color
                        }
                    }} transition="background 0.2s"
                        bg="transparent"
                    >
                        <Table.Cell>
                            <HStack gap="3">
                                <Box boxSize="24px" bg="gray.200" rounded="full" display="flex" alignItems="center" justifyContent="center">
                                    <Text fontSize="xs" fontWeight="bold">B</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="semibold" fontSize="sm">Bitcoin</Text>
                                    <Text fontSize="10px" color="gray.500" textTransform="uppercase">BTC</Text>
                                </Box>
                            </HStack>
                        </Table.Cell>
                        <Table.Cell textAlign="end" fontFamily="mono" fontSize="sm">$98,421.20</Table.Cell>
                        <Table.Cell textAlign="end">
                            <Badge variant="plain" color="green.600" fontSize="xs">+1.2%</Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <Text fontSize="sm" fontWeight="medium">0.45 BTC</Text>
                            <Text fontSize="xs" color="gray.400">$44,289.54</Text>
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button variant="ghost" size="xs" color="gray.400" _hover={{ color: "red.500" }}>
                                Remove
                            </Button>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row _hover={{
                        // ☀️ Light Mode: A soft, solid grey
                        bg: "gray.50",

                        // 🌙 Dark Mode: A subtle, transparent white overlay
                        _dark: {
                            bg: "gray.900", // or "gray.800" if you want a solid color
                        }
                    }} transition="background 0.2s"
                        bg="transparent"
                    >
                        <Table.Cell>
                            <HStack gap="3">
                                <Box boxSize="24px" bg="gray.200" rounded="full" display="flex" alignItems="center" justifyContent="center">
                                    <Text fontSize="xs" fontWeight="bold">B</Text>
                                </Box>
                                <Box>
                                    <Text fontWeight="semibold" fontSize="sm">Bitcoin</Text>
                                    <Text fontSize="10px" color="gray.500" textTransform="uppercase">BTC</Text>
                                </Box>
                            </HStack>
                        </Table.Cell>
                        <Table.Cell textAlign="end" fontFamily="mono" fontSize="sm">$98,421.20</Table.Cell>
                        <Table.Cell textAlign="end">
                            <Badge variant="plain" color="green.600" fontSize="xs">+1.2%</Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <Text fontSize="sm" fontWeight="medium">0.45 BTC</Text>
                            <Text fontSize="xs" color="gray.400">$44,289.54</Text>
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button variant="ghost" size="xs" color="gray.400" _hover={{ color: "red.500" }}>
                                Remove
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Box>
    );
}