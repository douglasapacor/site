import { Box, Breadcrumbs, Link, Typography, useTheme } from "@mui/material"
import { Home as HomeIcon, NavigateNext } from "@mui/icons-material"
import { FC } from "react"
import { breadcrumbsLocationType } from "@/lib/types"

const BreadcrumbsLocation: FC<{ paths: breadcrumbsLocationType }> = ({
  ...props
}) => {
  const theme = useTheme()
  const allPaths = [{ href: "/", text: "" }, ...props.paths]

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <div
        style={{
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 4,
          paddingBottom: 4,
          borderRadius: "3px",
          border: `2px solid ${theme.palette.primary.dark}`
        }}
      >
        <Breadcrumbs
          sx={{ color: theme => theme.palette.primary.dark }}
          separator={<NavigateNext fontSize="small" />}
        >
          {allPaths.map((path, index) => {
            const last = allPaths.length - 1

            if (index === 0) {
              return (
                <Link
                  key={`breadbrumb-${index}`}
                  href={path.href}
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme => theme.palette.primary.dark
                  }}
                >
                  <HomeIcon />
                </Link>
              )
            } else if (index === last) {
              return <Typography color="textLight">{path.text}</Typography>
            } else {
              return (
                <Link
                  key={`breadbrumb-${index}`}
                  href={path.href}
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme => theme.palette.primary.dark
                  }}
                >
                  {path.text}
                </Link>
              )
            }
          })}
        </Breadcrumbs>
      </div>
    </Box>
  )
}

export default BreadcrumbsLocation
