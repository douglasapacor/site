import useApi from "@/lib/useApi"
import { loginParams } from "@/pages/api/login"
import { routes } from "@/routes"
import { Button, Grid } from "@mui/material"

function Home() {
  const { data, error, execute, isPending } = useApi<loginParams>(routes.login)

  return (
    <Grid container>
      <Grid size={12}>
        <Button
          onClick={() => {
            execute({ login: "douglas", senha: "laskd" })
          }}
        >
          {isPending ? "carregando" : "Botão"}
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home
