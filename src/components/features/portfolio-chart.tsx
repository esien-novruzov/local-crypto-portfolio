import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Box, Text, useToken } from '@chakra-ui/react';

export default function MainChart({ data }) {
  // 1. Fetch theme colors dynamically
  // These tokens will automatically return dark-mode equivalents
  const [gridColor, textColor, brandGreen] = useToken('colors', [
    'border.subtle', // Muted line for grid
    'fg.muted',      // Muted grey for text
    'green.500'      // The "brand" color for the line
  ]);

  return (
    <Box w="full" 
    flex="1" // This says "take up all remaining vertical space"
  display="flex" // ⬅️ REQUIRED for flex="1" to work in children
  flexDirection="column" // ⬅️ REQUIRED
 minHeight="300px"// ⬅️ The "Flexbox hack" to allow children to shrink/grow correctly
    css={{
      "& *:focus": {
        outline: "none !important",
        boxShadow: "none !important",
      },
      "& .recharts-wrapper": {
        outline: "none !important",
      },
      "& .recharts-surface": {
        outline: "none !important",
      }
    }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} >
          <defs>
            {/* 2. Gradient that works in dark mode */}
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={brandGreen} stopOpacity={0.3} />
              <stop offset="95%" stopColor={brandGreen} stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* 3. Muted gridlines so they don't distract from the line */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={gridColor}
          />

          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: textColor, fontSize: 11 }}
            minTickGap={30}
            dy={10} // Padding from the grid
          />

          <YAxis hide domain={['auto', 'auto']} />

          {/* 4. The Tooltip: Matching the Card UI */}
          <Tooltip
            content={<CustomTooltip />}
            // The vertical line that follows the mouse
            cursor={{ stroke: textColor, strokeWidth: 1, strokeDasharray: '4 4' }}
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke={brandGreen}
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#colorPrice)"
            // Smooth animation
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box >
  );
}
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        bg="bg.panel" // Chakra v3 token for the card background
        p="3"
        shadow="2xl"
        borderRadius="lg"
        border="1px solid"
        opacity={0.9}
        borderColor="border.subtle"
        backdropFilter="blur(8px)" // Adds a "glassmorphism" feel
      >
        <Text fontSize="xs" color="fg.muted" mb="1">
          {payload[0].payload.time}
        </Text>
        <Text fontSize="md" fontWeight="bold">
          ${payload[0].value.toLocaleString()}
        </Text>
      </Box>
    );
  }
  return null;
};