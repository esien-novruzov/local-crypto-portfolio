"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Center, Spinner } from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode" // Importing your custom hook

export default function RootPage() {
  const router = useRouter()
  
  // Define theme-aware colors
  const bgColor = useColorModeValue("white", "gray.900")
  const spinnerColor = useColorModeValue("green.600", "green.400")

  useEffect(() => {
    const session = localStorage.getItem("user_session")
    
    // Small delay can prevent "flicker" if the check is too fast
    const timeout = setTimeout(() => {
      if (session) {
        router.replace("/dashboard")
      } else {
        router.replace("/login")
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <Center h="100vh" w="100vw" bg={bgColor} transition="background 0.2s">
      <Spinner size="xl" color={spinnerColor} />
    </Center>
  )
}