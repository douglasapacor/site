import { Done, Search, Send } from "@mui/icons-material"
import {
  Autocomplete,
  Box,
  Icon,
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material"
import * as React from "react"

export default function ACInput({ width }: { width?: number | string }) {
  const [pendingValue, setPendingValue] = React.useState<permList | null>(null)
  return (
    <Box
      sx={{
        width
      }}
    >
      <Box
        sx={{
          fontSize: 12,
          color: theme => theme.palette.grey[700],
          fontWeight: 600,
          mb: 0.5
        }}
      >
        Digite algo para inciar as buscar
      </Box>

      <Autocomplete
        open
        value={pendingValue}
        onChange={(event, newValue, reason) => {
          if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Backspace" ||
              (event as React.KeyboardEvent).key === "Delete") &&
            reason === "removeOption"
          ) {
            return
          }

          if (newValue) setPendingValue(newValue)
        }}
        renderValue={() => null}
        noOptionsText="sem resultados"
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props
          return (
            <li key={key} {...optionProps}>
              <Box
                component={Done}
                sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                style={{
                  visibility: selected ? "visible" : "hidden"
                }}
              />
              <Box
                component="span"
                sx={{
                  flexShrink: 0,
                  borderRadius: "3px",
                  mr: 1,
                  mt: "2px"
                }}
              >
                <Icon>{option.icon}</Icon>
              </Box>
              <Box
                sx={t => ({
                  flexGrow: 1,
                  "& span": {
                    color: "#8b949e",
                    ...t.applyStyles("light", {
                      color: "#586069"
                    })
                  }
                })}
              >
                {option.name}
                <br />
                <span>url: {option.path}</span>
              </Box>
              <IconButton size="small">
                <Send sx={{ fontSize: 18 }} />
              </IconButton>
            </li>
          )
        }}
        options={lista}
        getOptionLabel={option => option.name}
        renderInput={params => (
          <TextField
            fullWidth
            ref={params.InputProps.ref}
            inputProps={params.inputProps}
            autoFocus
            placeholder="buscar"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }
            }}
          />
        )}
      />
    </Box>
  )
}

interface permList {
  id: number
  name: string
  icon: string
  path: string
}

const lista = [
  {
    id: 1,
    name: "usuario",
    icon: "account_circle",
    path: "user/home"
  },
  {
    id: 2,
    name: "permissoes",
    icon: "security",
    path: "security/home"
  },
  {
    id: 3,
    name: "produtos",
    icon: "extension",
    path: "products/home"
  },
  {
    id: 4,
    name: "clientes",
    icon: "manage_accounts",
    path: "clients/home"
  },
  {
    id: 1,
    name: "usuario",
    icon: "account_circle",
    path: "user/home"
  },
  {
    id: 2,
    name: "permissoes",
    icon: "security",
    path: "security/home"
  },
  {
    id: 3,
    name: "produtos",
    icon: "extension",
    path: "products/home"
  },
  {
    id: 4,
    name: "clientes",
    icon: "manage_accounts",
    path: "clients/home"
  }
]
