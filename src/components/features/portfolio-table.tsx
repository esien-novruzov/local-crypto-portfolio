"use client";
import { Table, Button, HStack, Text, Box, Tabs } from "@chakra-ui/react";
import { Trash2, Pencil, Star } from "lucide-react";
import { useState, useEffect, useCallback, useMemo, memo } from "react";

const rows = [
    { name: "Bitcoin",          ticker: "BTC",   price: "$98,421.20", change: "+1.2%",  amount: "0.45 BTC",    value: "$44,289.54", positive: true  },
    { name: "Ethereum",         ticker: "ETH",   price: "$3,241.80",  change: "+0.8%",  amount: "12.3 ETH",    value: "$39,874.14", positive: true  },
    { name: "Tether",           ticker: "USDT",  price: "$1.00",      change: "0.0%",   amount: "—",           value: "—",          positive: true  },
    { name: "BNB",              ticker: "BNB",   price: "$412.30",    change: "+0.5%",  amount: "—",           value: "—",          positive: true  },
    { name: "Solana",           ticker: "SOL",   price: "$182.40",    change: "-1.4%",  amount: "102 SOL",     value: "$18,604.80", positive: false },
    { name: "XRP",              ticker: "XRP",   price: "$0.62",      change: "+2.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "USD Coin",         ticker: "USDC",  price: "$1.00",      change: "0.0%",   amount: "12,450 USDC", value: "$12,450.00", positive: true  },
    { name: "Cardano",          ticker: "ADA",   price: "$0.48",      change: "-0.3%",  amount: "—",           value: "—",          positive: false },
    { name: "Avalanche",        ticker: "AVAX",  price: "$38.60",     change: "-0.7%",  amount: "75 AVAX",     value: "$2,895.00",  positive: false },
    { name: "Dogecoin",         ticker: "DOGE",  price: "$0.084",     change: "+1.8%",  amount: "—",           value: "—",          positive: true  },
    { name: "TRON",             ticker: "TRX",   price: "$0.11",      change: "+0.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Toncoin",          ticker: "TON",   price: "$5.82",      change: "-1.1%",  amount: "—",           value: "—",          positive: false },
    { name: "Chainlink",        ticker: "LINK",  price: "$14.82",     change: "+3.1%",  amount: "450 LINK",    value: "$6,669.00",  positive: true  },
    { name: "Polkadot",         ticker: "DOT",   price: "$7.24",      change: "-0.9%",  amount: "—",           value: "—",          positive: false },
    { name: "Polygon",          ticker: "MATIC", price: "$0.72",      change: "+1.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Shiba Inu",        ticker: "SHIB",  price: "$0.0000092", change: "-2.1%",  amount: "—",           value: "—",          positive: false },
    { name: "Litecoin",         ticker: "LTC",   price: "$83.40",     change: "+0.6%",  amount: "—",           value: "—",          positive: true  },
    { name: "Bitcoin Cash",     ticker: "BCH",   price: "$381.20",    change: "-1.2%",  amount: "—",           value: "—",          positive: false },
    { name: "Uniswap",          ticker: "UNI",   price: "$8.14",      change: "+2.7%",  amount: "—",           value: "—",          positive: true  },
    { name: "Cosmos",           ticker: "ATOM",  price: "$9.31",      change: "-0.5%",  amount: "—",           value: "—",          positive: false },
    { name: "Stellar",          ticker: "XLM",   price: "$0.124",     change: "+1.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "Ethereum Classic", ticker: "ETC",   price: "$26.80",     change: "-0.8%",  amount: "—",           value: "—",          positive: false },
    { name: "Hedera",           ticker: "HBAR",  price: "$0.074",     change: "+3.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Filecoin",         ticker: "FIL",   price: "$5.62",      change: "-1.8%",  amount: "—",           value: "—",          positive: false },
    { name: "Aptos",            ticker: "APT",   price: "$8.90",      change: "+4.2%",  amount: "—",           value: "—",          positive: true  },
    { name: "Arbitrum",         ticker: "ARB",   price: "$1.12",      change: "-0.4%",  amount: "—",           value: "—",          positive: false },
    { name: "VeChain",          ticker: "VET",   price: "$0.038",     change: "+0.9%",  amount: "—",           value: "—",          positive: true  },
    { name: "NEAR Protocol",    ticker: "NEAR",  price: "$4.18",      change: "+2.3%",  amount: "—",           value: "—",          positive: true  },
    { name: "Optimism",         ticker: "OP",    price: "$2.34",      change: "-1.6%",  amount: "—",           value: "—",          positive: false },
    { name: "Maker",            ticker: "MKR",   price: "$1,842.00",  change: "+1.0%",  amount: "—",           value: "—",          positive: true  },
    { name: "The Graph",        ticker: "GRT",   price: "$0.168",     change: "+5.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "Algorand",         ticker: "ALGO",  price: "$0.192",     change: "-0.7%",  amount: "—",           value: "—",          positive: false },
    { name: "Injective",        ticker: "INJ",   price: "$24.60",     change: "+6.2%",  amount: "—",           value: "—",          positive: true  },
    { name: "Immutable",        ticker: "IMX",   price: "$1.82",      change: "-2.3%",  amount: "—",           value: "—",          positive: false },
    { name: "Aave",             ticker: "AAVE",  price: "$92.40",     change: "+1.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Stacks",           ticker: "STX",   price: "$1.94",      change: "-0.6%",  amount: "—",           value: "—",          positive: false },
    { name: "Theta Network",    ticker: "THETA", price: "$1.62",      change: "+0.8%",  amount: "—",           value: "—",          positive: true  },
    { name: "Monero",           ticker: "XMR",   price: "$162.40",    change: "-1.0%",  amount: "—",           value: "—",          positive: false },
    { name: "Internet Computer",ticker: "ICP",   price: "$11.84",     change: "+3.7%",  amount: "—",           value: "—",          positive: true  },
    { name: "Lido DAO",         ticker: "LDO",   price: "$2.14",      change: "-2.8%",  amount: "—",           value: "—",          positive: false },
    { name: "Quant",            ticker: "QNT",   price: "$104.20",    change: "+1.2%",  amount: "—",           value: "—",          positive: true  },
    { name: "Flow",             ticker: "FLOW",  price: "$0.762",     change: "-0.4%",  amount: "—",           value: "—",          positive: false },
    { name: "Sui",              ticker: "SUI",   price: "$1.48",      change: "+7.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Sei",              ticker: "SEI",   price: "$0.584",     change: "+4.8%",  amount: "—",           value: "—",          positive: true  },
    { name: "Celestia",         ticker: "TIA",   price: "$8.62",      change: "-1.9%",  amount: "—",           value: "—",          positive: false },
    { name: "Jito",             ticker: "JTO",   price: "$2.94",      change: "+3.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "Pyth Network",     ticker: "PYTH",  price: "$0.412",     change: "-0.5%",  amount: "—",           value: "—",          positive: false },
    { name: "dogwifhat",        ticker: "WIF",   price: "$2.18",      change: "+8.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Jupiter",          ticker: "JUP",   price: "$0.842",     change: "+5.2%",  amount: "—",           value: "—",          positive: true  },
    { name: "Starknet",         ticker: "STRK",  price: "$0.924",     change: "-3.1%",  amount: "—",           value: "—",          positive: false },
    { name: "Curve DAO",        ticker: "CRV",   price: "$0.582",     change: "-1.4%",  amount: "—",           value: "—",          positive: false },
    { name: "Compound",         ticker: "COMP",  price: "$52.40",     change: "+2.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "Synthetix",        ticker: "SNX",   price: "$3.14",      change: "-0.8%",  amount: "—",           value: "—",          positive: false },
    { name: "yearn.finance",    ticker: "YFI",   price: "$8,240.00",  change: "+0.6%",  amount: "—",           value: "—",          positive: true  },
    { name: "Basic Attention",  ticker: "BAT",   price: "$0.238",     change: "+1.7%",  amount: "—",           value: "—",          positive: true  },
    { name: "Chiliz",           ticker: "CHZ",   price: "$0.092",     change: "-1.1%",  amount: "—",           value: "—",          positive: false },
    { name: "Enjin Coin",       ticker: "ENJ",   price: "$0.328",     change: "+2.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Zilliqa",          ticker: "ZIL",   price: "$0.022",     change: "-0.9%",  amount: "—",           value: "—",          positive: false },
    { name: "Oasis Network",    ticker: "ROSE",  price: "$0.082",     change: "+1.3%",  amount: "—",           value: "—",          positive: true  },
    { name: "Pendle",           ticker: "PENDLE",price: "$4.82",      change: "+9.2%",  amount: "—",           value: "—",          positive: true  },
    { name: "dYdX",             ticker: "DYDX",  price: "$2.14",      change: "-2.4%",  amount: "—",           value: "—",          positive: false },
    { name: "GMX",              ticker: "GMX",   price: "$38.20",     change: "+1.8%",  amount: "—",           value: "—",          positive: true  },
    { name: "1inch",            ticker: "1INCH", price: "$0.412",     change: "-0.6%",  amount: "—",           value: "—",          positive: false },
    { name: "Blur",             ticker: "BLUR",  price: "$0.284",     change: "+3.8%",  amount: "—",           value: "—",          positive: true  },
    { name: "Mina Protocol",    ticker: "MINA",  price: "$0.724",     change: "-1.2%",  amount: "—",           value: "—",          positive: false },
    { name: "Kava",             ticker: "KAVA",  price: "$0.682",     change: "+0.7%",  amount: "—",           value: "—",          positive: true  },
    { name: "EOS",              ticker: "EOS",   price: "$0.784",     change: "-0.4%",  amount: "—",           value: "—",          positive: false },
    { name: "MultiversX",       ticker: "EGLD",  price: "$42.80",     change: "+2.6%",  amount: "—",           value: "—",          positive: true  },
    { name: "Fantom",           ticker: "FTM",   price: "$0.482",     change: "-1.8%",  amount: "—",           value: "—",          positive: false },
    { name: "Axie Infinity",    ticker: "AXS",   price: "$6.84",      change: "-0.5%",  amount: "—",           value: "—",          positive: false },
    { name: "Decentraland",     ticker: "MANA",  price: "$0.414",     change: "+1.9%",  amount: "—",           value: "—",          positive: true  },
    { name: "The Sandbox",      ticker: "SAND",  price: "$0.382",     change: "-1.3%",  amount: "—",           value: "—",          positive: false },
    { name: "Rocket Pool",      ticker: "RPL",   price: "$18.40",     change: "+0.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Cronos",           ticker: "CRO",   price: "$0.094",     change: "-0.2%",  amount: "—",           value: "—",          positive: false },
    { name: "WOO Network",      ticker: "WOO",   price: "$0.284",     change: "+2.8%",  amount: "—",           value: "—",          positive: true  },
    { name: "Conflux",          ticker: "CFX",   price: "$0.162",     change: "-1.6%",  amount: "—",           value: "—",          positive: false },
    { name: "Trust Wallet",     ticker: "TWT",   price: "$1.24",      change: "+0.9%",  amount: "—",           value: "—",          positive: true  },
    { name: "Manta Network",    ticker: "MANTA", price: "$1.82",      change: "+5.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "LayerZero",        ticker: "ZRO",   price: "$3.42",      change: "-0.8%",  amount: "—",           value: "—",          positive: false },
    { name: "EigenLayer",       ticker: "EIGEN", price: "$2.84",      change: "+4.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "Scroll",           ticker: "SCR",   price: "$0.924",     change: "-2.2%",  amount: "—",           value: "—",          positive: false },
    { name: "io.net",           ticker: "IO",    price: "$4.12",      change: "+6.8%",  amount: "—",           value: "—",          positive: true  },
    { name: "0x Protocol",      ticker: "ZRX",   price: "$0.412",     change: "-0.3%",  amount: "—",           value: "—",          positive: false },
    { name: "Balancer",         ticker: "BAL",   price: "$3.84",      change: "+1.6%",  amount: "—",           value: "—",          positive: true  },
    { name: "MAGIC",            ticker: "MAGIC", price: "$0.682",     change: "-1.7%",  amount: "—",           value: "—",          positive: false },
    { name: "Tellor",           ticker: "TRB",   price: "$84.20",     change: "+3.2%",  amount: "—",           value: "—",          positive: true  },
    { name: "Bonk",             ticker: "BONK",  price: "$0.0000284", change: "+12.4%", amount: "—",           value: "—",          positive: true  },
    { name: "Wormhole",         ticker: "W",     price: "$0.384",     change: "-2.6%",  amount: "—",           value: "—",          positive: false },
    { name: "Ondo",             ticker: "ONDO",  price: "$0.842",     change: "+4.7%",  amount: "—",           value: "—",          positive: true  },
    { name: "Ethena",           ticker: "ENA",   price: "$0.624",     change: "-1.4%",  amount: "—",           value: "—",          positive: false },
    { name: "Notcoin",          ticker: "NOT",   price: "$0.0082",    change: "+8.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "ZKsync",           ticker: "ZK",    price: "$0.184",     change: "-3.8%",  amount: "—",           value: "—",          positive: false },
    { name: "Dymension",        ticker: "DYM",   price: "$2.14",      change: "+2.9%",  amount: "—",           value: "—",          positive: true  },
    { name: "Raydium",          ticker: "RAY",   price: "$2.84",      change: "+5.6%",  amount: "—",           value: "—",          positive: true  },
    { name: "Helium",           ticker: "HNT",   price: "$6.42",      change: "-0.8%",  amount: "—",           value: "—",          positive: false },
    { name: "Render",           ticker: "RNDR",  price: "$7.84",      change: "+3.4%",  amount: "—",           value: "—",          positive: true  },
    { name: "Bittensor",        ticker: "TAO",   price: "$284.00",    change: "+2.1%",  amount: "—",           value: "—",          positive: true  },
    { name: "Worldcoin",        ticker: "WLD",   price: "$4.82",      change: "-4.2%",  amount: "—",           value: "—",          positive: false },
    { name: "Akash Network",    ticker: "AKT",   price: "$3.84",      change: "+1.9%",  amount: "—",           value: "—",          positive: true  },
    { name: "Arkham",           ticker: "ARKM",  price: "$1.82",      change: "-0.6%",  amount: "—",           value: "—",          positive: false },
];

const coinColors: Record<string, string> = {
    BTC:   "#F7931A", ETH:   "#627EEA", USDT:  "#26A17B", BNB:   "#F3BA2F",
    SOL:   "#9945FF", XRP:   "#00AAE4", USDC:  "#2775CA", ADA:   "#0033AD",
    AVAX:  "#E84142", DOGE:  "#C2A633", TRX:   "#EB0029", TON:   "#0098EA",
    LINK:  "#375BD2", DOT:   "#E6007A", MATIC: "#8247E5", SHIB:  "#FFA409",
    LTC:   "#BFBBBB", BCH:   "#0AC18E", UNI:   "#FF007A", ATOM:  "#6F7390",
    XLM:   "#08B5E5", ETC:   "#328332", HBAR:  "#222222", FIL:   "#0090FF",
    APT:   "#2DD8A3", ARB:   "#2D374B", VET:   "#15BDFF", NEAR:  "#00C08B",
    OP:    "#FF0420", MKR:   "#1AAB9B", GRT:   "#6747ED", ALGO:  "#000000",
    INJ:   "#00A3FF", IMX:   "#17B5CB", AAVE:  "#B6509E", STX:   "#5546FF",
    THETA: "#2AB8E6", XMR:   "#FF6600", ICP:   "#29ABE2", LDO:   "#F68628",
    QNT:   "#2A3A8E", FLOW:  "#00EF8B", SUI:   "#4DA2FF", SEI:   "#9E1F63",
    TIA:   "#7B2FBE", JTO:   "#2ED3B7", PYTH:  "#E6DAFE", WIF:   "#C4A35A",
    JUP:   "#C7F284", STRK:  "#EC796B", CRV:   "#40649F", COMP:  "#00D395",
    SNX:   "#00D1FF", YFI:   "#006AE3", BAT:   "#FF5000", CHZ:   "#CD0124",
    ENJ:   "#7866D5", ZIL:   "#49C1BF", ROSE:  "#0192F6", PENDLE:"#4ABEFF",
    DYDX:  "#6966FF", GMX:   "#2D42FC", "1INCH":"#1B314B", BLUR:  "#FF8700",
    MINA:  "#E39844", KAVA:  "#FF564F", EOS:   "#000000", EGLD:  "#1D3461",
    FTM:   "#13B5EC", AXS:   "#0055D5", MANA:  "#FC9965", SAND:  "#04ADEF",
    RPL:   "#FF6B35", CRO:   "#002D74", WOO:   "#1DA2F1", CFX:   "#E15C2B",
    TWT:   "#3375BB", MANTA: "#9B3DEA", ZRO:   "#8B5CF6", EIGEN: "#1C6DEB",
    SCR:   "#FBCB07", IO:    "#141414", ZRX:   "#302C2C", BAL:   "#1E1E1E",
    MAGIC: "#C62F2F", TRB:   "#20D4A4", BONK:  "#F7941C", W:     "#8AA3CC",
    ONDO:  "#141414", ENA:   "#B967FF", NOT:   "#FFFFFF", ZK:    "#1755F4",
    DYM:   "#9B5EFF", RAY:   "#C14DFB", HNT:   "#474DFF", RNDR:  "#ED2F2F",
    TAO:   "#333333", WLD:   "#141414", AKT:   "#FF414C", ARKM:  "#FCD22D",
    GRASS: "#52D858",
};

const tableStyles = {
    "& tbody tr": { borderBottomWidth: "0px" },
    "& tbody td": { borderBottomWidth: "0px" },
    "& thead tr": { borderBottomWidth: "0px", background: "transparent" },
    "& th": { borderBottomWidth: "0px", background: "transparent" },
    "& table": { borderWidth: "0px" },
};

type RowData = typeof rows[number];

const AssetRow = memo(function AssetRow({ row, isFavorite, onToggleFavorite }: {
    row: RowData;
    isFavorite: boolean;
    onToggleFavorite: (ticker: string) => void;
}) {
    return (
        <Table.Row
            bg="transparent"
            _hover={{ bg: "app.hover.bg" }}
            transition="background 0.2s"
        >
            <Table.Cell>
                <HStack gap="3">
                    <Button
                        variant="ghost"
                        size="xs"
                        color={isFavorite ? "yellow.400" : "app.fg.muted"}
                        _hover={{ color: "yellow.400", bg: "transparent" }}
                        onClick={() => onToggleFavorite(row.ticker)}
                        aria-label="Favorite asset"
                        p={1}
                        flexShrink={0}
                    >
                        <Star size={14} fill={isFavorite ? "currentColor" : "none"} />
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
    );
});

function AssetTable({ rows, favorites, onToggleFavorite }: {
    rows: RowData[];
    favorites: Set<string>;
    onToggleFavorite: (ticker: string) => void;
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
                    <AssetRow
                        key={row.ticker}
                        row={row}
                        isFavorite={favorites.has(row.ticker)}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </Table.Body>
        </Table.Root>
    );
}

export default function PortfolioTable() {
    const [isMounted, setIsMounted] = useState(false);
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

    useEffect(() => { setIsMounted(true) }, []);

    const toggleFavorite = useCallback((ticker: string) => {
        setFavorites((prev) => {
            const next = new Set(prev);
            next.has(ticker) ? next.delete(ticker) : next.add(ticker);
            return next;
        });
    }, []);

    const favoriteRows = useMemo(() => rows.filter((r) => favorites.has(r.ticker)), [favorites]);

    if (!isMounted) return null;

    return (
        <Box borderRadius="xl" overflow="hidden" bg="app.bg.surface" shadow="sm">
            <Box px={6} pt={5} pb={0} borderBottom="1px solid" borderColor="app.border">
                <Tabs.Root defaultValue="top100" variant="line" size="sm" lazyMount unmountOnExit>
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
