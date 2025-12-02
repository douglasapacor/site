import { Box, Container, Grid } from "@mui/material"
import type { FC } from "react"
const height = 280
const fontSize = "0.70em"

export const BottomNavigation: FC = ({ ...props }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: height,
        background: theme => theme.palette.primary.dark,
        paddingTop: "20px"
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                color: "#F5F5F5",
                fontSize: fontSize,
                fontFamily: "RobotoSlab"
              }}
            >
              <a className="bottom-navigation-anchor">INSTITUCIONAL</a>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                color: "#F5F5F5",
                fontSize: fontSize,
                fontFamily: "RobotoSlab",
                gap: 0.8
              }}
            >
              <a style={{ userSelect: "none", textTransform: "uppercase" }}>
                boletim eletrônico inr
              </a>
              <a className="bottom-navigation-anchor">Notícias</a>
              <a className="bottom-navigation-anchor">Jurisprudência</a>
              <a className="bottom-navigation-anchor">opnião</a>
              <a className="bottom-navigation-anchor">Perguntas e Respostas</a>
              <a className="bottom-navigation-anchor">Mensagen dos Editores</a>
              <a className="bottom-navigation-anchor">Pareceres CGJ SP</a>
              <a className="bottom-navigation-anchor">
                Suplementos da consultoria INR
              </a>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                color: "#F5F5F5",
                fontSize: fontSize,
                fontFamily: "RobotoSlab",
                gap: 0.8
              }}
            >
              <a style={{ userSelect: "none", textTransform: "uppercase" }}>
                CLASSIFICADORES INR
              </a>
              <a className="bottom-navigation-anchor">Classificadores INR PR</a>
              <a className="bottom-navigation-anchor">Classificadores INR RS</a>
              <a className="bottom-navigation-anchor">Classificadores INR SP</a>
              <a className="bottom-navigation-anchor">
                Arquivos Acumulados dos Classificadores SP
              </a>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                color: "#F5F5F5",
                fontSize: fontSize,
                fontFamily: "RobotoSlab",
                gap: 0.8
              }}
            >
              <a className="bottom-navigation-anchor">SALAS TEMÁTICAS</a>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                color: "#F5F5F5",
                fontSize: fontSize,
                fontFamily: "RobotoSlab",
                gap: 0.8
              }}
            >
              <a style={{ userSelect: "none", textTransform: "uppercase" }}>
                SERVIÇOS
              </a>
              <a className="bottom-navigation-anchor">Consultoria INR</a>
              <a className="bottom-navigation-anchor">INR Cursos</a>
              <a className="bottom-navigation-anchor">TV INR</a>
              <a className="bottom-navigation-anchor">
                Consultoria Notorial e Registral
              </a>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                color: "#F5F5F5",
                fontSize: fontSize,
                fontFamily: "RobotoSlab",
                gap: 0.8
              }}
            >
              <a className="bottom-navigation-anchor">BASE DE DADOS</a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
