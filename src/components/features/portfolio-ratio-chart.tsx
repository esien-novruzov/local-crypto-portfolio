import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Box, Text, Flex, useToken, HStack, SimpleGrid, Center, VStack } from '@chakra-ui/react';


const data = [
    { name: 'Bitcoin', value: 55, color: '#00C49F' }, // Vibrant Teal/Green
    { name: 'Ethereum', value: 25, color: '#0088FE' }, // Tech Blue
    { name: 'Solana', value: 12, color: '#00E5FF' },  // Cyan/Electric Blue
    { name: 'Others', value: 8, color: '#004D40' },   // Deep Forest Green
];
const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
        <g>
            <Sector
                cx={cx} cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 8} // Subtle "pop"
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            {/* Outer Glow Ring */}
            <Sector
                cx={cx} cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 12}
                outerRadius={outerRadius + 14}
                fill={fill}
                opacity={0.3}
            />
        </g>
    );
};

export default function PortfoioRationChart({ chartData }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Box
            bg="#1A1D23"
            p={6}
            rounded="xl"
            border="1px solid #2D333D"
            flex="1"
            display="flex"
            flexDirection="column"
        >
            <Text color="white" fontWeight="bold" mb={4}>Portfolio Allocation</Text>

            {/* 📈 Chart Area */}
            <Box flex="1" minH="220px" w="full" position="relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={chartData}
                            cx="50%" // 🚀 Explicitly center the Pie in its container
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            onMouseEnter={(_, index) => setActiveIndex(index)}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </Box>

            {/* 📋 Centered Labels Area */}
<Flex
    justifyContent="center" 
    w="full"
    mt={6}
>
    {/* We use a Wrap or Flex here instead of SimpleGrid. 
       This ensures the two columns are "tight" and centered together.
    */}
    <Flex 
        gap={10} 
        justify="center" 
        w="fit-content"
    >
        {/* Left Column */}
        <VStack align="flex-start" spacing={4}>
            {chartData.slice(0, 2).map((item) => (
                <LabelItem key={item.name} item={item} />
            ))}
        </VStack>

        {/* Right Column */}
        <VStack align="flex-start" spacing={4}>
            {chartData.slice(2, 4).map((item) => (
                <LabelItem key={item.name} item={item} />
            ))}
        </VStack>
    </Flex>
</Flex>
        </Box>
    );
}