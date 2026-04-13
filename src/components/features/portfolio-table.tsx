import { Table, Button, HStack, Text, Box } from "@chakra-ui/react";
import { Trash2, Pencil } from "lucide-react";
import { useState, useEffect } from "react";

const rows = [
    { name: "Bitcoin",  ticker: "BTC", price: "$98,421.20", change: "+1.2%", amount: "0.45 BTC", value: "$44,289.54", positive: true },
    { name: "Ethereum", ticker: "ETH", price: "$3,241.80",  change: "+0.8%", amount: "12.3 ETH", value: "$39,874.14", positive: true },
    { name: "Solana",   ticker: "SOL", price: "$182.40",    change: "-1.4%", amount: "102 SOL",  value: "$18,604.80", positive: false },
    { name: "USDC",     ticker: "USDC",price: "$1.00",      change: "0.0%",  amount: "12,450 USDC", value: "$12,450.00", positive: true },
    { name: "Chainlink",ticker: "LINK", price: "$14.82",    change: "+3.1%", amount: "450 LINK", value: "$6,669.00",  positive: true },
    { name: "Avalanche",ticker: "AVAX", price: "$38.60",    change: "-0.7%", amount: "75 AVAX",  value: "$2,895.00",  positive: false },
];

const coinColors: Record<string, string> = {
    BTC:  "#F7931A",
    ETH:  "#627EEA",
    SOL:  "#14F195",
    USDC: "#2775CA",
    LINK: "#375BD2",
    AVAX: "#E84142",
};

export default function PortfolioTable() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <Box borderRadius="xl" overflow="hidden" shadow="sm" bg="app.bg.surface">
            <Box px={6} pt={6} pb={4} borderBottom="1px solid" borderColor="app.border">
                <Text fontWeight="bold" color="app.fg">Assets</Text>
            </Box>
            <Table.Root
                variant="outline"
                size="md"
                tableLayout="fixed"
                css={{
                    "& tbody tr": { borderBottomWidth: "0px" },
                    "& tbody td": { borderBottomWidth: "0px" },
                    "& thead tr": { borderBottomWidth: "0px", background: "transparent" },
                    "& th": { borderBottomWidth: "0px", background: "transparent" },
                    "& th:first-of-type, & td:first-of-type": { paddingLeft: "var(--chakra-spacing-6)" },
                    "& th:last-of-type, & td:last-of-type": { paddingRight: "var(--chakra-spacing-6)" },
                    "& table": { borderWidth: "0px" },
                }}
                width="full"
            >
                <Table.Header bg="transparent">
                    <Table.Row>
                        <Table.ColumnHeader color="app.fg.muted" fontWeight="medium" fontSize="xs" textAlign="left">Name</Table.ColumnHeader>
                        <Table.ColumnHeader color="app.fg.muted" fontWeight="medium" fontSize="xs" textAlign="end">Price</Table.ColumnHeader>
                        <Table.ColumnHeader color="app.fg.muted" fontWeight="medium" fontSize="xs" textAlign="end">24h %</Table.ColumnHeader>
                        <Table.ColumnHeader color="app.fg.muted" fontWeight="medium" fontSize="xs" textAlign="end">Holdings</Table.ColumnHeader>
                        <Table.ColumnHeader color="app.fg.muted" fontWeight="medium" fontSize="xs" textAlign="center">Actions</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {rows.map((row) => (
                        <Table.Row
                            key={row.ticker}
                            bg="transparent"
                            _hover={{ bg: "app.hover.bg" }}
                            transition="background 0.2s"
                        >
                            <Table.Cell>
                                <HStack gap="3">
                                    <Box
                                        boxSize="32px"
                                        bg={coinColors[row.ticker] ?? "app.border"}
                                        rounded="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        flexShrink={0}
                                    >
                                        <Text fontSize="xs" fontWeight="bold" color="white">
                                            {row.ticker[0]}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight="semibold" fontSize="sm" color="app.fg">{row.name}</Text>
                                        <Text fontSize="xs" color="app.fg.muted">{row.ticker}</Text>
                                    </Box>
                                </HStack>
                            </Table.Cell>
                            <Table.Cell textAlign="end" fontFamily="mono" fontSize="sm" fontWeight="medium" color="app.fg">
                                {row.price}
                            </Table.Cell>
                            <Table.Cell textAlign="end">
                                <Text
                                    fontSize="sm"
                                    fontWeight="medium"
                                    color={row.positive ? "green.500" : "red.400"}
                                >
                                    {row.change}
                                </Text>
                            </Table.Cell>
                            <Table.Cell textAlign="end">
                                <Text fontSize="sm" fontWeight="medium" color="app.fg">{row.amount}</Text>
                                <Text fontSize="xs" color="app.fg.muted">{row.value}</Text>
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                <HStack gap={1} justify="center">
                                    <Button
                                        variant="ghost"
                                        size="xs"
                                        color="app.fg.muted"
                                        _hover={{ color: "app.fg", bg: "transparent" }}
                                        aria-label="Edit asset"
                                        p={1}
                                    >
                                        <Pencil size={14} />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="xs"
                                        color="app.fg.muted"
                                        _hover={{ color: "red.400", bg: "transparent" }}
                                        aria-label="Remove asset"
                                        p={1}
                                    >
                                        <Trash2 size={14} />
                                    </Button>
                                </HStack>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    );
}
