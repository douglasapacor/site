import { Box, Container, Grid } from "@mui/material"
import Image from "next/image"
import type { FC } from "react"

export const BottomLocation: FC = ({ ...props }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        background: theme => theme.palette.primary.main
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <Box
              sx={{
                width: "100%",
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <Image
                src="/inline-logo.png"
                alt="Inr Publicações"
                width={150}
                height={65}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
            <Box
              sx={{
                width: "100%",
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                color: "#F5F5F5",
                fontFamily: "RobotoSlab",
                fontSize: "0.8rem",
                gap: 0.8
              }}
            >
              <a>Central do Assinante: </a>
              <a>(11) 2959-0220</a>
              <a>faleconosco@inrpublicacoes.com.br</a>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
            <Box
              sx={{
                width: "100%",
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                color: "#F5F5F5",
                fontFamily: "RobotoSlab",
                fontSize: "0.8rem",
                gap: 0.8
              }}
            >
              <a>Localização: </a>
              <a>Rua Voluntários da Pátria, 2.468 - 23º andar</a>
              <a>Santana - São Paulo/SP - CEP.02402-000</a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
