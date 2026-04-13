"use client";
import { Table, Button, HStack, Text, Box, Tabs } from "@chakra-ui/react";
import { Trash2, Pencil, Star } from "lucide-react";
import { useState, useEffect } from "react";

const rows = [
    { name: "Bitcoin",   ticker: "BTC",  price: "$98,421.20", change: "+1.2%", amount: "0.45 BTC",    value: "$44,289.54", positive: true },
    { name: "Ethereum",  ticker: "ETH",  price: "$3,241.80",  change: "+0.8%", amount: "12.3 ETH",    value: "$39,874.14", positive: true },
    { name: "Solana",    ticker: "SOL",  price: "$182.40",    change: "-1.4%", amount: "102 SOL",     value: "$18,604.80", positive: false },
    { name: "USDC",      ticker: "USDC", price: "$1.00",      change: "0.0%",  amount: "12,450 USDC", value: "$12,450.00", positive: true },
    { name: "Chainlink", ticker: "LINK", price: "$14.82",     change: "+3.1%", amount: "450 LINK",    value: "$6,669.00",  positive: true },
    { name: "Avalanche", ticker: "AVAX", price: "$38.60",     change: "-0.7%", amount: "75 AVAX",     value: "$2,895.00",  positive: false },
];

const coinColors: Record<string, string> = {
    BTC:  "#F7931A",
    ETH:  "#627EEA",
    SOL:  "#14F195",
    USDC: "#2775CA",
    LINK: "#375BD2",
    AVAX: "#E84142",
};

const tableStyles = {
    "& tbody tr": { borderBottomWidth: "0px" },
    "& tbody td": { borderBottomWidth: "0px" },
    "& thead tr": { borderBottomWidth: "0px", background: "transparent" },
    "& th": { borderBottomWidth: "0px", background: "transparent" },
    "& th:first-of-type, & td:first-of-type": { paddingLeft: "var(--chakra-spacing-6)" },
    "& th:last-of-type, & td:last-of-type": { paddingRight: "var(--chakra-spacing-6)" },
    "& table": { borderWidth: "0px" },
};

function AssetTable({ rows, favorites, onToggleFavorite }: {
    rows: typeof import('./portfolio-table').default extends never ? never : (typeof rows),
    favorites: Set<string>,
    onToggleFavorite: (ticker: string) => void,
}) {
    if (rows.length === 0) {
        return (
            <Box py={16} textAlign="center">
                <Text fontSize="2xl" mb={2}>⭐</Text>
                <Text fontWeight="medium" color="app.fg" mb={1}>No favorites yet</Text>
                <Text fontSize="sm" color="app.fg.muted">Star an asset from the Top 100 list to add it here.</Text>
            </Box>
        );
    }

    return (
        <Table.Root
            variant="plain"
            size="md"
            tableLayout="fixed"
            css={tableStyles}
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
                                <Button
                                    variant="ghost"
                                    size="xs"
                                    color={favorites.has(row.ticker) ? "yellow.400" : "app.fg.muted"}
                                    _hover={{ color: "yellow.400", bg: "transparent" }}
                                    onClick={() => onToggleFavorite(row.ticker)}
                                    aria-label="Favorite asset"
                                    p={1}
                                    flexShrink={0}
                                >
                                    <Star size={14} fill={favorites.has(row.ticker) ? "currentColor" : "none"} />
                                </Button>
                                <Box
                                    boxSize="32px"
                                    bg={coinColors[row.ticker] ?? "app.border"}
                                    rounded="full"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexShrink={0}
                                >
                                    <Text fontSize="xs" fontWeight="bold" color="white">{row.ticker[0]}</Text>
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
                            <Text fontSize="sm" fontWeight="medium" color={row.positive ? "green.500" : "red.400"}>
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
    );
}

export default function PortfolioTable() {
    const [isMounted, setIsMounted] = useState(false);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

    useEffect(() => { setIsMounted(true) }, []);
    if (!isMounted) return null;

    const toggleFavorite = (ticker: string) => {
        setFavorites((prev) => {
            const next = new Set(prev);
            next.has(ticker) ? next.delete(ticker) : next.add(ticker);
            return next;
        });
    };

    const favoriteRows = rows.filter((r) => favorites.has(r.ticker));

    return (
        <Box borderRadius="xl" overflow="hidden" bg="app.bg.surface">
            <Box px={6} pt={5} pb={0} borderBottom="1px solid" borderColor="app.border">
                <Tabs.Root defaultValue="top100" variant="line" size="sm">
                    <Tabs.List borderBottomWidth="0" gap={6}>
                        <Tabs.Trigger
                            value="top100"
                            px={0}
                            fontSize="sm"
                            fontWeight="medium"
                            color="app.fg.muted"
                            _selected={{ color: "app.fg", borderColor: "green.500" }}
                        >
                            Top 100
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="favorites"
                            px={0}
                            fontSize="sm"
                            fontWeight="medium"
                            color="app.fg.muted"
                            _selected={{ color: "app.fg", borderColor: "green.500" }}
                        >
                            Favorites
                            {favorites.size > 0 && (
                                <Box
                                    as="span"
                                    ml={2}
                                    px="1.5"
                                    py="0.5"
                                    fontSize="10px"
                                    fontWeight="bold"
                                    bg="green.500"
                                    color="white"
                                    borderRadius="full"
                                    lineHeight="1.4"
                                >
                                    {favorites.size}
                                </Box>
                            )}
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="top100" px={0} pb={0}>
                        <AssetTable rows={rows} favorites={favorites} onToggleFavorite={toggleFavorite} />
                    </Tabs.Content>
                    <Tabs.Content value="favorites" px={0} pb={0}>
                        <AssetTable rows={favoriteRows} favorites={favorites} onToggleFavorite={toggleFavorite} />
                    </Tabs.Content>
                </Tabs.Root>
            </Box>
        </Box>
    );
}
