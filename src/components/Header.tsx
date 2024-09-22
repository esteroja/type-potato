import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "lightcoral" }}
      >
        <Toolbar>
          <nav>
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li style={{ marginRight: "20px" }}>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Avaleht
                </NavLink>
              </li>
              <li style={{ marginRight: "20px" }}>
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sisselogimine
                </NavLink>
              </li>
              <li style={{ marginRight: "20px" }}>
                <NavLink
                  to="/info"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Info
                </NavLink>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
