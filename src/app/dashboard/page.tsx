"use client"
import AddTransaction from "@/components/features/add-transaction";
import MainChart from "@/components/features/portfolio-chart";
import PortfoioRationChart from "@/components/features/portfolio-ratio-chart";
import PortfolioTable from "@/components/features/portfolio-table";
import TimeRangeSelector from "@/components/features/time-range-selector";
import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import StatusBar from "@/components/layout/status-bar";
import { Box, Text, Container, Grid, GridItem, Heading, SimpleGrid, Flex, Circle, HStack, VStack, Input, InputGroup, Tooltip, InputElement, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { SearchIcon } from "@chakra-ui/icons";
import PageLayout from "@/components/layout/page-layout";

// Sample Data
const chartData = [
  { time: 'Jan 3', price: 40000 }, { time: 'Jan 6', price: 45000 },
  { time: 'Jan 9', price: 65000 }, { time: 'Jan 12', price: 50000 },
  { time: 'Jan 15', price: 48000 }, { time: 'Jan 18', price: 70000 },
  { time: 'Jan 21', price: 75000 }, { time: 'Jan 24', price: 85000 },
  { time: 'Jan 27', price: 60000 }, { time: 'Jan 31', price: 80000 },
];

const allocationData = [
  { name: 'Bitcoin', value: 45, color: '#F7931A' },
  { name: 'Ethereum', value: 30, color: '#627EEA' },
  { name: 'Solana', value: 15, color: '#14F195' },
  { name: 'USDC', value: 10, color: '#2775CA' },
];

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <PageLayout>
      <Container
        maxW="container.xl"
        py={8}
        display="flex"
        flexDirection="column"
        flex="1"
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
          gap="6"

          p="0"
        >
          {/* Portfolio Chart */}
          <GridItem colSpan={{ base: 12, lg: 8 }} bg="app.bg.surface" rounded="xl" shadow="sm" display="flex" alignItems="stretch">
            <Flex
              w="full"
              p={6}
              direction="column"
              align="stretch"
            >
              <Flex
                justify="space-between"
                mb={{ base: "4", md: "8" }}
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
                gap={{ base: "4", md: "0" }} // Add space between balance and buttons on mobile
              >
                <Box>
                  <Text color="gray.400" fontSize="sm" fontWeight="medium">Total Balance</Text>
                  <HStack align="baseline" gap="2">
                    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="app.fg.balance">
                      $124,592.00
                    </Text>
                    <Text color="green.500" fontSize="sm" fontWeight="bold">+2.4%</Text>
                  </HStack>
                </Box>

                {/* Wrapper to ensure the selector doesn't stretch weirdly on mobile */}
                <Box alignSelf={{ base: "flex-start", md: "auto" }}>
                  <TimeRangeSelector />
                </Box>
              </Flex>
              <MainChart data={chartData} />
            </Flex>
          </GridItem>

          {/* 1. Hero Section: Portfolio allocation */}
          {/* 📊 RIGHT: ALLOCATION & ACTIONS */}
          <GridItem colSpan={{ base: 12, lg: 4 }}  >
            <Flex direction="column" gap="6" h="full">

              {/* Portfolio Allocation Card */}
              <Box p={6} bg="app.bg.surface" rounded="xl" shadow="sm">
                <Text color="gray.700" fontWeight="bold" mb={6}>Your portfolio allocation</Text>

                {/* Integrated Chart & Labels Box */}
                <Box p={6} rounded="xl" color="#303432">

                  <Box height="180px">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={allocationData}
                          innerRadius={55}
                          outerRadius={75}
                          paddingAngle={8}
                          dataKey="value"
                          stroke="none"
                        >
                          {allocationData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>

                  <SimpleGrid columns={2} spacing={4} mt={6}>
                    {allocationData.map((item) => (
                      <HStack key={item.name} spacing={3}>
                        <Box w="3" h="3" rounded="full" bg={item.color} flexShrink={0} />
                        <Box>
                          <Text fontSize="xs" fontWeight="bold">{item.name}</Text>
                          <Text color="gray.500" fontSize="10px">{item.value}%</Text>
                        </Box>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>

              {/* Add Transaction Card */}
              <Box p={6} bg="app.bg.surface" rounded="xl" shadow="sm">
                <Text color="gray.700" fontWeight="bold" mb={4}>Add a transaction</Text>
                <Box>
                  <InputElement placement="start">
                    <SearchIcon color="gray.400" />
                  </InputElement>
                  <Input
                    placeholder="Search symbol..."
                    ps="10"
                    name=""
                    bg="gray.50"
                    border="none"
                  />
                </Box>
              </Box>

            </Flex>
          </GridItem>

          {/* 4. Detailed Table Row */}
          <GridItem colSpan={12} rounded="xl">
            <PortfolioTable />
          </GridItem>
          {/* </Box> */}
        </Grid>
      </Container >
    </PageLayout>
  );
}