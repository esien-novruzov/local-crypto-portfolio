import { IconButton } from "@chakra-ui/react"
import { LuLogOut } from "react-icons/lu"

export function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem("user_session")
    window.location.href = "/login"
  }

  return (
    <IconButton
      onClick={handleLogout}
      variant="ghost"
      aria-label="Logout"
      size="sm"
      css={{
        _icon: {
          width: "5",
          height: "5",
        },
      }}
    >
      <LuLogOut />
    </IconButton>
  )
}