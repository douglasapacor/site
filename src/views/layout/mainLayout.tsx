import { BottomLocation } from "@/components/BottomLocation"
import { BottomNavigation } from "@/components/BottomNavigation"
import MobileNavbar from "@/components/MobileNavBar"
import { NavBar } from "@/components/NavBar"
import { Topo } from "@/components/Topo"
import { Box, Container, useMediaQuery, useTheme } from "@mui/material"
import { ReactNode } from "react"

export default function mainLayout({ children }: { children: ReactNode }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"))

  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        display: "grid"
      }}
    >
      {!isMobile && <Topo />}
      {isMobile ? <MobileNavbar /> : <NavBar />}
      <Box sx={{ width: "100%", minHeight: 600 }}>
        <Container>{children}</Container>
      </Box>
      <BottomLocation />
      <BottomNavigation />
    </Box>
  )
}
