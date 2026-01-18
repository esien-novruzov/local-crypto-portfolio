"use client"
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // 🛡️ Router Guard Logic
  useEffect(() => {
    const session = localStorage.getItem("user_session")
    const isAuth = session === "authenticated"
    const isValidRoute = pathname === "/login" || pathname === "/dashboard"
    if (!isValidRoute) {
      router.replace(isAuth ? "/dashboard" : "/login")
      return
    }
    if (!isAuth && pathname !== "/login") {
      router.replace("/login")
    } else if (isAuth && pathname === "/login") {
      router.replace("/dashboard")
    }
  }, [isAuthenticated, pathname, router])

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
