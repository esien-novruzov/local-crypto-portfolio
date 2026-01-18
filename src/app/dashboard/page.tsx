"use client"
import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import StatusBar from "@/components/layout/status-bar";
import { Box, Text, Container, Grid, GridItem, Heading, SimpleGrid, Flex, Circle, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
      <Header />
      <StatusBar />

      <Box as="main" flex="1">
        <Container maxW="container.xl" py={24}>
          <Grid
            templateRows="repeat(3, auto)"
            templateColumns="repeat(3, 1fr)"
            gap={6}
          >
            {/* 1. Hero Section: Portfolio Summary */}
            <GridItem colSpan={{ base: 3, lg: 2 }} bg="gray.400" rounded="xl" p={10}>
              <Heading size="md" color="white">Your portfolio</Heading>
              <Text fontSize="5xl" fontWeight="bold" color="white">$100 000 000</Text>
            </GridItem>

            {/* 2. Portfolio Chart */}
            <GridItem colSpan={{ base: 3, lg: 1 }} bg="gray.200" rounded="xl" display="flex" alignItems="center" justifyContent="center">
              <Text color="gray.500">Portfolio chart</Text>
            </GridItem>

            {/* 3. Secondary Charts Row */}
            <GridItem colSpan={3}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <Box bg="gray.200" h="250px" rounded="xl" display="flex" alignItems="center" justifyContent="center">
                  <Text color="gray.500">Another chart</Text>
                </Box>
                <Box bg="gray.200" h="250px" rounded="xl" display="flex" alignItems="center" justifyContent="center">
                  <Text color="gray.500">Another chart</Text>
                </Box>
              </SimpleGrid>
            </GridItem>

            {/* 4. Detailed Table Row */}
            <GridItem colSpan={3} bg="gray.200" rounded="xl" p={6} minH="400px">
              <Text color="gray.500">Portfolio overview as table</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}