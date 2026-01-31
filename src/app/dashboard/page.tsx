"use client"
import MainChart from "@/components/features/portfolio-chart";
import PortfoioRationChart from "@/components/features/portfolio-ratio-chart";
import PortfolioTable from "@/components/features/portfolio-table";
import TimeRangeSelector from "@/components/features/time-range-selector";
import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import StatusBar from "@/components/layout/status-bar";
import { generateMonthlyData } from "@/lib/utils";
import { Box, Text, Container, Grid, GridItem, Heading, SimpleGrid, Flex, Circle, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const data = generateMonthlyData();

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50" // Deep Navy-Grey background
      _dark={{
        bg: "#303432", // Or use Chakra's built-in deep token
      }}>
      <Header />
      <StatusBar />

      <Box as="main" flex="1">
        <Container maxW="container.xl" pt={8}>

          <Grid
            templateRows="repeat(3, auto)"
            templateColumns="repeat(3, 1fr)"
            gap={6}
          >

            {/* <Box
              // 1. The wrapper handles the "frame"
              borderRadius="xl"
              overflow="hidden" // Essential to "clip" the table corners
              border="1px solid"
              borderColor="border.subtle"
              bg="bg.panel"
              shadow="sm"
            > */}
            {/* 2. Portfolio Chart */}
            <GridItem colSpan={{ base: 3, lg: 2 }} bg="gray.100" rounded="xl" display="flex" alignItems="center" justifyContent="center" shadow="sm">
              <Box w={"full"} p={8}>
                <HStack justify="space-between" mb="8" align="flex-start">
                  <Box>
                    <Text color="fg.muted" fontSize="sm" fontWeight="medium">Total Balance</Text>
                    <HStack align="baseline" gap="2">
                      <Text fontSize="3xl" fontWeight="bold">$124,592.00</Text>
                      <Text color="green.500" fontSize="sm" fontWeight="bold">+2.4%</Text>
                    </HStack>
                  </Box>

                  {/* Our New Selector */}
                  <TimeRangeSelector />
                </HStack>
                <MainChart data={data} />
              </Box>
            </GridItem>

            <VStack>
              {/* 1. Hero Section: Portfolio Summary */}
              <GridItem colSpan={{ base: 2, lg: 1 }} bg="gray.100" rounded="xl" p={10} m={0} shadow="sm">
                <Heading size="xl" color="gray.600">Your portfolio allocation</Heading>
                <PortfoioRationChart />
              </GridItem>
              <GridItem colSpan={{ base: 3, lg: 1 }} bg="gray.100" rounded="xl" p={10} shadow="sm">
                <Heading size="xl" color="gray.600">Your portfolio allocation</Heading>
              </GridItem>
            </VStack>

            {/* 3. Secondary Charts Row */}
            {/*<GridItem colSpan={3}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <Box bg="gray.200" h="250px" rounded="xl" display="flex" alignItems="center" justifyContent="center">
                  <Text color="gray.500">Another chart</Text>
                </Box>
                <Box bg="gray.200" h="250px" rounded="xl" display="flex" alignItems="center" justifyContent="center">
                  <Text color="gray.500">Another chart</Text>
                </Box>
              </SimpleGrid>
            </GridItem>*/}

            {/* 4. Detailed Table Row */}
            <GridItem colSpan={3} rounded="xl" minH="400px">
              <PortfolioTable />
            </GridItem>
            {/* </Box> */}
          </Grid>
        </Container >
      </Box>
      <Footer />
    </Box>
  );
}