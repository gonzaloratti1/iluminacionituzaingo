import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Badge,
  Container,
} from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { useContext } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { CartContext } from "../CartContext/CartContext";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const color = yellow[500];
const colorMain = "#212121";

const NavbarComponent = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: color }}>
        <Toolbar>
          <Link to="/">
            <TipsAndUpdatesIcon style={{ color: colorMain }} />
          </Link>
          <Typography
            variant="h4"
            color="black"
            sx={{ flexGrow: 1, marginLeft: 2 }}
          >
            Iluminacion Ituzaingo
          </Typography>

          <Container
            className="container"
            sx={{ marginTop: 2.3, textAlign: "center", marginRight: -15 }}
          >
            <Stack direction="row" spacing={1} marginRight={40}>
              <Link to="/category/Lamparas">
                <Button>
                  <Typography color="black">LAMPARAS</Typography>
                </Button>
              </Link>

              <Link to="/category/Exterior">
                <Button>
                  <Typography color="black">EXTERIOR</Typography>
                </Button>
              </Link>

              <Link to="/category/Interior">
                <Button>
                  <Typography color="black">INTERIOR</Typography>
                </Button>
              </Link>
            </Stack>
          </Container>

          <NavLink to="/cart">
            <Badge badgeContent={totalProducts()} color="primary">
              <LocalMallIcon style={{ color: "black" }} />
            </Badge>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarComponent;
